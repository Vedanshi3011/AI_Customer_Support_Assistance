import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useThemeStore } from "../store/themeStore";

const data = [
  { day: "Mon", queries: 120 },
  { day: "Tue", queries: 200 },
  { day: "Wed", queries: 300 },
  { day: "Thu", queries: 250 },
  { day: "Fri", queries: 400 },
  { day: "Sat", queries: 350 },
  { day: "Sun", queries: 500 },
];

export default function QueryChart() {
  const { darkMode } = useThemeStore();

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? "#334155" : "#E2E8F0"}
          />

          <XAxis
            dataKey="day"
            tick={{
              fill: darkMode ? "#CBD5E1" : "#475569",
            }}
            axisLine={{
              stroke: darkMode ? "#475569" : "#CBD5E1",
            }}
            tickLine={{
              stroke: darkMode ? "#475569" : "#CBD5E1",
            }}
          />

          <YAxis
            tick={{
              fill: darkMode ? "#CBD5E1" : "#475569",
            }}
            axisLine={{
              stroke: darkMode ? "#475569" : "#CBD5E1",
            }}
            tickLine={{
              stroke: darkMode ? "#475569" : "#CBD5E1",
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: darkMode
                ? "#1E293B"
                : "#FFFFFF",
              border: darkMode
                ? "1px solid #334155"
                : "1px solid #E2E8F0",
              borderRadius: "12px",
              color: darkMode
                ? "#F8FAFC"
                : "#0F172A",
            }}
            labelStyle={{
              color: darkMode
                ? "#F8FAFC"
                : "#0F172A",
            }}
          />

          <Line
            type="monotone"
            dataKey="queries"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#3B82F6",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "#2563EB",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}