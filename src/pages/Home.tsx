import DebtsComponent from "../components/DebtsComponent/DebtsComponent";
import "./Home.css";
const HomePage = () => {
  return (
    <div className="Home-container">
      <div className="Home-header">
        <h3>Debt Consolidation Savings Calculator</h3>
        <p>
          Enter the details of your current unsecured debt and see how much you
          may be able to save after consolidating the debts into a single loan.
          Only include credit card debt, medical debt, personal loan debt, and
          other types of unsecured debt
        </p>
      </div>

      <DebtsComponent />
    </div>
  );
};

export default HomePage;
