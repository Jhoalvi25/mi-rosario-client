import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export default function ControlPanel() {
  // Sample data
  const data = [
    { name: "Gelatina", students: 400 },
    { name: "Tequeños", students: 700 },
    { name: "Quesillos", students: 200 },
    { name: "Yogurt", students: 1000 },
  ];

  return (
    <div style={{display: "inline-block"}}>
      <h1>PANEL DE CONTROL</h1>
      <BarChart width={750} height={750} data={data}>
        <Bar dataKey="students" fill="orange" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}
