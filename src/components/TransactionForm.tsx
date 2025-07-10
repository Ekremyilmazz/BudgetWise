import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTransaction } from "../features/budgetSlice";
import { v4 as uuidv4 } from "uuid";

interface Props {
  categories: string[];
}

const TransactionForm: React.FC<Props> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (!description || isNaN(numericAmount) || numericAmount === 0) return;

    dispatch(
      addTransaction({
        id: uuidv4(),
        description,
        amount: numericAmount,
        category,
      })
    );

    setDescription("");
    setAmount("");
  };

  return (
    <div className="transaction-form-container">
      <h2 className="form-header">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-item">
          <input
            type="text"
            placeholder="Transaction Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-item">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-item">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <button type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
