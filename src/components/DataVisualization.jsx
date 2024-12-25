import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DataVisualization = ({ bookingCar }) => {
  return (
    <>
      <div className="mt-12">
        <h2 className="text-center text-xl md:text-4xl font-bold my-5">
          Visualization With Daily{" "}
          <span className="text-red-600">Rental Price</span>
        </h2>
        <ResponsiveContainer width={"100%"} height={550}>
          <BarChart
            data={bookingCar}
            margin={{
              top: 5,
              right: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis dataKey="rentalPrice" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey=" model"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="red" />}
            />
            <Bar
              dataKey="rentalPrice"
              fill="red"
              activeBar={<Rectangle fill="blue" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DataVisualization;
