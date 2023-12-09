import { Debt } from "../../../interfaces/Debt";
import "./DebtsInputComponent.css";

interface DebtsInputComponentProps {
  debt: Debt;
  placeholder: string;
  type: string;
  fieldName: keyof Debt;
  handleChange: (
    value: string | number,
    fieldName: keyof Debt,
    debtId: number
  ) => void;
  percent?: boolean;
  money?: boolean;
}

const DebtsInputComponent = ({
  debt,
  placeholder,
  type,
  fieldName,
  handleChange,
  percent = false,
  money = false,
}: DebtsInputComponentProps) => {
  return (
    <div className="DebtsInputComponent-container">
      {money && (
        <div className="DebtsInputComponent-symbol">
          <p>$</p>
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={debt[fieldName]}
        onChange={(e) => handleChange(e.target.value, fieldName, debt.id)}
        min={0.0}
        step={percent ? "any" : 1}
      />
      {percent && (
        <div className="DebtsInputComponent-symbol">
          <p>%</p>
        </div>
      )}
    </div>
  );
};

export default DebtsInputComponent;
