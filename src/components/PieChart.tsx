
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../app/hooks";

// Colors for categories
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00FF"];

const CustomPieChart = () => {
  const transactions = useAppSelector((state) => state.budget.transactions);

  // Count the total amount based on categories
  const categoryTotals: { [key: string]: number } = {};

  transactions.forEach((tx) => {
    if (!categoryTotals[tx.category]) {
      categoryTotals[tx.category] = 0;
    }
    categoryTotals[tx.category] += tx.amount;
  });

  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: total, 
  }));

  return (
    <div className="piechart-container">
        <h2 className="piechart-header">Pie Chart</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ name, value }) => `${name}: $${value}`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => [`$${value}`, "Amount"]}/>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
