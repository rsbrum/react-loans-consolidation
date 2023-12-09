import { useCallback, useEffect, useState } from "react";
import { Debt } from "../../../interfaces/Debt";
import ChevronRightIcon from "../../Icons/ChevronLeftIcon";
import TransparentButtonComponent from "../../TransparentButtonComponent/TransparentButtonComponent";
import "./CalculateDebtsComponent.css";
import {
  calculateLoanDetails,
  calculateTotalAmountPaid,
} from "../../../lib/finance";
import SliderComponent from "../../SliderComponent/SliderComponent";

interface CalculateDebtsComponentProps {
  toggle: () => void;
  debts: Debt[];
}

const CalculateDebtsComponent = ({
  toggle,
  debts,
}: CalculateDebtsComponentProps) => {
  const [currentTotalRepayment, setCurrentTotalRepayment] = useState(0);
  const [currentTotalMonthlyPayment, setCurrentTotalMonthlyPayment] =
    useState(0);
  const [newAPR, setNewAPR] = useState(1);
  const [newLoanTerm, setNewLoanTerm] = useState(12);
  const [newTotalRepayment, setNewTotalRepayment] = useState(0);
  const [newMonthlyPayment, setNewMonthlyPayment] = useState(0);

  // Credit Card - remaining debt amount : $5000 - current APR: 15.5 - current monthly payment: $300
  // Medical Debt - remaining debt amount: $1000 - current APR: 11.25 - current monthly payment: $150 */

  const getTotalRepaymentSaving = () => {
    return currentTotalRepayment - newTotalRepayment;
  };

  const getTotalMonthlySaving = () => {
    return currentTotalMonthlyPayment - newMonthlyPayment;
  };

  const calculateCurrentPayments = useCallback(() => {
    let totalRepayment = 0;
    let totalMonthlyPayment = 0;

    debts.forEach((debt) => {
      const remainingDebt = debt.remainingDebtAmount || 0;
      const APR = debt.currentApr || 0;
      const monthlyPayment = debt.currentMonthlyPayment || 0;

      const totalPaidAmount = calculateTotalAmountPaid(
        remainingDebt,
        APR,
        monthlyPayment
      );
      if (!isNaN(totalPaidAmount)) totalRepayment += totalPaidAmount;

      totalMonthlyPayment += +monthlyPayment;
    });

    setCurrentTotalRepayment(totalRepayment);
    setCurrentTotalMonthlyPayment(totalMonthlyPayment);
  }, [debts]);

  const calculateNewPayments = useCallback(() => {
    let newTotalRepayment = 0;
    let newTotalMonthlyPayment = 0;

    debts.forEach((debt) => {
      const remainingDebt = debt.remainingDebtAmount || 0;

      const newLoanDetails = calculateLoanDetails(
        remainingDebt,
        newAPR,
        newLoanTerm
      );
      newTotalRepayment += +newLoanDetails.totalAmountPaid;
      newTotalMonthlyPayment += +newLoanDetails.monthlyPayment;
    });

    setNewTotalRepayment(newTotalRepayment);
    setNewMonthlyPayment(newTotalMonthlyPayment);
  }, [debts, newAPR, newLoanTerm]);

  const renderFixedValue = (value: number) => {
    return value.toFixed(2);
  };

  useEffect(() => {
    calculateCurrentPayments();
    calculateNewPayments();
  }, [calculateCurrentPayments, calculateNewPayments]);

  useEffect(() => {
    calculateNewPayments();
  }, [newAPR, newLoanTerm, calculateNewPayments]);

  return (
    <div className="CalculateDebtsComponent-container">
      <TransparentButtonComponent
        onClick={toggle}
        icon={<ChevronRightIcon />}
        text="Update Your Current Debts"
      />
      <div className="CalculateDebtsComponent-boxes">
        <div className="CalculateDebtsComponent-configuration-container">
          <div className="CalculateDebtsComponent-configuration-header">
            <p className="bold">CONFIGURE YOUR CONSOLIDATED LOAN</p>
            <p>Use the sliders below to simulate the new APR and loan term.</p>
          </div>

          <div className="CalculateDebtsComponent-configuration-slider-container">
            <div className="CalculateDebtsComponent-configuration-slider-container-box">
              <div className="CalculateDebtsComponent-configuration-slider-container-box-title">
                DESIRED APR
              </div>
              <div className="CalculateDebtsComponent-configuration-slider-container-box-value">
                {newAPR}%
              </div>
            </div>

            <SliderComponent
              setValue={setNewAPR}
              label={"%"}
              min={1}
              max={36}
              value={newAPR}
            />
          </div>

          <div className="CalculateDebtsComponent-configuration-slider-container">
            <div className="CalculateDebtsComponent-configuration-slider-container-box">
              <div className="CalculateDebtsComponent-configuration-slider-container-box-title">
                DESIRED LOAN TERM
              </div>
              <div className="CalculateDebtsComponent-configuration-slider-container-box-value">
                {newLoanTerm} Months
              </div>
            </div>

            <SliderComponent
              setValue={setNewLoanTerm}
              label={"mo."}
              min={12}
              max={60}
              value={newLoanTerm}
            />
          </div>
        </div>

        <div className="CalculateDebtsComponent-results-container">
          <div className="CalculateDebtsComponent-results-box">
            <div className="CalculateDebtsComponent-results-box-row">
              <p>New Total Repayment</p>
              <p className="blue-font bold f-18">
                ${renderFixedValue(newTotalRepayment)}
              </p>
            </div>

            <div className="CalculateDebtsComponent-results-box-row">
              <p>Current Total Repayment</p>
              <p className="bold f-18">
                ${renderFixedValue(currentTotalRepayment)}
              </p>
            </div>

            <div
              className={`CalculateDebtsComponent-results-box-row ${
                getTotalRepaymentSaving() > 0 ? "green-bg" : "red-bg"
              }`}
            >
              <p className="bold">Total Repayment Savings</p>
              <p
                className={`${
                  getTotalRepaymentSaving() > 0 ? "green-font" : "red-font"
                } bold f-18`}
              >
                ${renderFixedValue(getTotalRepaymentSaving())}
              </p>
            </div>
          </div>

          <div className="CalculateDebtsComponent-results-box">
            <div className="CalculateDebtsComponent-results-box-row">
              <p>New Montly Payment</p>
              <p className="blue-font bold f-18">
                ${renderFixedValue(newMonthlyPayment)}
              </p>
            </div>

            <div className="CalculateDebtsComponent-results-box-row">
              <p>Current Monthly Payment</p>
              <p className="bold f-18">
                ${renderFixedValue(currentTotalMonthlyPayment)}
              </p>
            </div>

            <div
              className={`CalculateDebtsComponent-results-box-row ${
                getTotalMonthlySaving() > 0 ? "green-bg" : "red-bg"
              }`}
            >
              <p className="bold">Total Monthly Savings</p>
              <p
                className={`${
                  getTotalMonthlySaving() > 0 ? "green-font" : "red-font"
                } bold f-18`}
              >
                ${renderFixedValue(getTotalMonthlySaving())}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateDebtsComponent;
