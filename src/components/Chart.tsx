import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush } from 'recharts';
import axios from 'axios';
import './Chart.css';

interface DataPoint {
  timestamp: string;
  value: number;
}

const Chart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/data.json');
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleClick = (e: any) => {
    if (e && e.activePayload && e.activePayload.length > 0) {
      const data = e.activePayload[0].payload;
      alert(`Timestamp: ${data.timestamp}, Value: ${data.value}`);
    }
  };

  const formatXAxis = (tickItem: string) => {
    const date = new Date(tickItem);
    if (timeframe === 'daily') {
      return date.toLocaleDateString();
    } else if (timeframe === 'weekly' || timeframe === 'monthly') {
      return date.toLocaleDateString();
    }
    return date.toLocaleString();
  };

  const filteredData = data.filter((item) => {
    const date = new Date(item.timestamp);
    if (timeframe === 'daily') {
      return true;
    } else if (timeframe === 'weekly') {
      return date.getDay() === 0;
    } else if (timeframe === 'monthly') {
      return date.getDate() === 1;
    }
    return true;
  });

  return (
    <div className="chart-container">
      <div className="button-group">
        <button className={timeframe === 'daily' ? 'active' : ''} onClick={() => setTimeframe('daily')}>Daily</button>
        <button className={timeframe === 'weekly' ? 'active' : ''} onClick={() => setTimeframe('weekly')}>Weekly</button>
        <button className={timeframe === 'monthly' ? 'active' : ''} onClick={() => setTimeframe('monthly')}>Monthly</button>
      </div>
      <LineChart width={800} height={400} data={filteredData} onClick={handleClick}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;
