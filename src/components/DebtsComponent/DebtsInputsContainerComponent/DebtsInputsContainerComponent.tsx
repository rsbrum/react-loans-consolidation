import { Debt } from "../../../interfaces/Debt";
import FullButtonComponent from "../../FullButtonComponent/FullButtonComponent";
import PlusIcon from "../../Icons/PlusIcon";
import TransparentButtonComponent from "../../TransparentButtonComponent/TransparentButtonComponent";
import DebtsInputComponent from "../DebtsInputComponent/DebtsInputComponent";
import "./DebtsInputsContainerComponent.css";

interface DebtsInputContainerComponentProps {
  debts: Debt[];
  setDebts: (debts: React.SetStateAction<Debt[]>) => void;
  toggle: () => void;
}

const DebtsInputContainerComponent = ({
  debts,
  setDebts,
  toggle,
}: DebtsInputContainerComponentProps) => {
  const addDebt = () => {
    const newDebt = {
      id: debts.length,
      debtName: "",
      remainingDebtAmount: 0,
      currentApr: 0,
      currentMonthlyPayment: 0,
    };
    setDebts([...debts, newDebt]);
  };

  const deleteDebt = (id: number) => {
    const newDebts = debts.filter((debt) => debt.id != id);
    setDebts(newDebts);
  };

  const handleChange = (
    value: string | number,
    fieldName: keyof Debt,
    debtId: number
  ) => {
    setDebts((debts) =>
      debts.map((debt) =>
        debt.id === debtId ? { ...debt, [fieldName]: value } : debt
      )
    );
  };

  const renderInputs = () => {
    return debts.map((debt) => {
      return (
        <tr key={debt.id}>
          <td>
            <DebtsInputComponent
              placeholder="Debt name"
              type="text"
              fieldName="debtName"
              debt={debt}
              handleChange={handleChange}
            />
          </td>
          <td>
            <DebtsInputComponent
              placeholder="Debt amount"
              type="number"
              fieldName="remainingDebtAmount"
              debt={debt}
              handleChange={handleChange}
              money
            />
          </td>
          <td>
            <DebtsInputComponent
              placeholder="Current APR"
              type="number"
              fieldName="currentApr"
              debt={debt}
              handleChange={handleChange}
              percent
            />
          </td>
          <td className="DebtsInputContainerComponent-button-container">
            <DebtsInputComponent
              placeholder="Monthly Payment"
              type="number"
              fieldName="currentMonthlyPayment"
              debt={debt}
              handleChange={handleChange}
              money
            />
            <button
              className="DebtsInputContainerComponent-delete-button"
              onClick={() => deleteDebt(debt.id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="DebtsInputContainerComponent-container">
      <p className="bold">ENTER YOUR CURRENT DEBTS</p>
      <table className="DebtsInputContainerComponent-table">
        <thead>
          <tr>
            <th>DEBT NAME</th>
            <th>REMAINING DEBT AMOUNT</th>
            <th>CURRENT APR</th>
            <th>CURRENT MONTHLY PAYMENT</th>
          </tr>
        </thead>
        <tbody>{renderInputs()}</tbody>
      </table>
      <TransparentButtonComponent
        onClick={addDebt}
        icon={<PlusIcon />}
        text="Add another Debt"
      />
      <FullButtonComponent onClick={toggle} text="Calculate Savings" />
    </div>
  );
};

export default DebtsInputContainerComponent;
