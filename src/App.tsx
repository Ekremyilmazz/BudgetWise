import "./App.css";
import HeroSection from "./components/HeroSection";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BalanceOverview from "./components/BalanceOverview";
import CustomPieChart from "./components/PieChart";
import Footer from "./components/Footer";


const categories = ["Food", "Salary", "Transport", "Entertainment", "Other"];

function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <HeroSection />
      </div>
      <div className="main-container">
        <div className="form-section grid-box">
          <TransactionForm categories={categories} />
        </div>
        <div className="transactions-section grid-box">
          <TransactionList />
        </div>
        <div className="overview-container grid-box">
          <BalanceOverview />
        </div>
        <div className="piechart-container grid-box">
          <CustomPieChart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
