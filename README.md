# React Charting Library Assignment

This is a React.js application that displays a chart using the Recharts library. The chart supports timeframe breakdowns (daily, weekly, monthly) and interactive click events. The chart data is provided in JSON format.

## Features

- Display a line chart using Recharts
- Timeframe breakdown: daily, weekly, monthly
- Zoom functionality using the Brush component
- Interactive click events to display data point details

## Project Structure

charting-app/
├── node_modules/
├── public/
│ ├── data.json
│ ├── index.html
├── src/
│ ├── components/
│ │ └── Chart.tsx
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ └── index.tsx
├── package.json
├── tsconfig.json
└── README.md

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vasanth27s/probz.ai-assignment.git
Navigate to the project directory:
bash
cd probz.ai-assignment
Install the dependencies:
npm install
Usage
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to view the application.
Data
The chart data is stored in public/data.json. Here is an example of the data structure:

json
[
  { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-04T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-05T00:00:00Z", "value": 8 },
  { "timestamp": "2023-01-06T00:00:00Z", "value": 18 },
  { "timestamp": "2023-01-07T00:00:00Z", "value": 20 },
  { "timestamp": "2023-01-08T00:00:00Z", "value": 22 },
  { "timestamp": "2023-01-09T00:00:00Z", "value": 25 },
  { "timestamp": "2023-01-10T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-11T00:00:00Z", "value": 12 },
  { "timestamp": "2023-01-12T00:00:00Z", "value": 5 },
  { "timestamp": "2023-01-13T00:00:00Z", "value": 15 },
  { "timestamp": "2023-01-14T00:00:00Z", "value": 8 },
  { "timestamp": "2023-01-15T00:00:00Z", "value": 18 },
  { "timestamp": "2023-01-16T00:00:00Z", "value": 20 },
  { "timestamp": "2023-01-17T00:00:00Z", "value": 22 },
  { "timestamp": "2023-01-18T00:00:00Z", "value": 25 },
  { "timestamp": "2023-01-19T00:00:00Z", "value": 10 },
  { "timestamp": "2023-01-20T00:00:00Z", "value": 12 }
]
Contributing
Contributions are welcome! Please feel free to submit a pull request.

License
This project is licensed under the MIT License.
