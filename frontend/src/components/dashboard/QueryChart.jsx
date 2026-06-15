import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function QueryChart() {
  const data = [
    {
      day: "Mon",

      queries: 12,
    },

    {
      day: "Tue",

      queries: 18,
    },

    {
      day: "Wed",

      queries: 25,
    },

    {
      day: "Thu",

      queries: 20,
    },

    {
      day: "Fri",

      queries: 31,
    },
  ];

  return (
    <LineChart width={500} height={250} data={data}>
      <XAxis dataKey="day" />

      <YAxis />

      <Tooltip />

      <Line type="monotone" dataKey="queries" />
    </LineChart>
  );
}
