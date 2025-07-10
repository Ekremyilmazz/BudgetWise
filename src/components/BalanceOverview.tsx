import { useAppSelector } from "../app/hooks";

const BalanceOverview = () => {
    const { balance, income, expense } = useAppSelector((state) => state.budget);

    return (
        <div className="balance-overview">
            <h2>💼 Summary</h2>
            <p>💰 Balance: {balance}</p>
            <p>⬆️ Income: {income}</p>
            <p>⬇️ Expense: {expense}</p>
        </div>
    );
};

export default BalanceOverview;