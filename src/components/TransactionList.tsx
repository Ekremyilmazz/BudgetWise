import { useAppSelector, useAppDispatch } from "../app/hooks";
import { deleteTransaction } from "../features/budgetSlice";
import TransactionFilter from "./TransactionFilter";
import { useState } from "react";


const TransactionList = () => {
  const transactions = useAppSelector((state) => state.budget.transactions);
  const dispatch = useAppDispatch();
  const [filterCategory, setFilterCategory] = useState("");

  const filteredTransactions = filterCategory
    ? transactions.filter(tx => tx.category === filterCategory)
    : transactions;

  return (
    <div className="transaction-list">
        <h2 className="transaction-header">Transactions</h2>
        <TransactionFilter 
            categories={["Food", "Salary", "Transport", "Entertainment", "Other"]}
            selectedCategory={filterCategory}
            onCategoryChange={setFilterCategory}
        />
                       
        {filteredTransactions.length === 0 ? (
            <p>No transactions found</p>
        ) : (
      <ul>
        {filteredTransactions.map((tx) => (
          <li key={tx.id}>
           <strong>{tx.description}</strong>
           {tx.amount < 0 ? "-$" + Math.abs(tx.amount) : "+$" + tx.amount} ({tx.category})
            <button onClick={() => dispatch(deleteTransaction(tx.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default TransactionList;
