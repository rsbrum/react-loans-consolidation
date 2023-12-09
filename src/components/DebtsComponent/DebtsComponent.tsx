import { useState } from "react";
import { Debt } from "../../interfaces/Debt";
import "./Debts.css";
import CalculateDebtsComponent from "./CalculateDebtsComponent/CalculateDebtsComponent";
import DebtsInputContainerComponent from "./DebtsInputsContainerComponent/DebtsInputsContainerComponent";

// @TODO check if there are undefined values in debts array
// if there are, do not allow to proceed to calculating
const DebtsComponent = () => {
  const [debts, setDebts] = useState<Debt[]>([
    {
      id: 0,
      debtName: "",
      remainingDebtAmount: 0,
      currentApr: 0,
      currentMonthlyPayment: 0,
    },
  ]);
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };

  if (showCalculator)
    return <CalculateDebtsComponent debts={debts} toggle={toggleCalculator} />;
  else
    return (
      <DebtsInputContainerComponent
        debts={debts}
        setDebts={setDebts}
        toggle={toggleCalculator}
      />
    );
};

export default DebtsComponent;
