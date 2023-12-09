## Scope

Assignment: Build a browser based Debt Consolidation Savings Calculator

Background: Consumers may have many high interest debts, like auto loans, credit cards, or other installment loans. They can save money by combining all of their high interest debts into a single loan with a lower interest rate.

We want to help consumers determine exactly how much money they can save by consolidating their loans.

Description: Use the prototype to create a browser based debt consolidation savings calculator.

Users can enter the details of their multiple high interest debts, and the calculator will show them how much they can save with a single consolidated loan. The amount of the new loan will be the sum of the outstanding balances of the existing loans. The user can change the potential term and APR of their consolidated loan to see how those affect the monthly payments and overall repayment.

The solution would preferably be written in React, but any modern Javascript framework will be acceptable (not JQuery).
The submission should run in any modern browser (IE compatibility not required)
A financial calculations library has been included to simplify the loan calculations. Check the link for documentation. Some people seem to have issues figuring out how to use the recommended library, so feel free to use other libraries.

# Instructions

- `npm install` to install the application
- `npm start` to serve the application
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# App Structure

The app does not make usage of any routing nor does it consume any external services.

Folder Structure:

- `components`: Contains all components that are used as building blocks and some reusable components. Some components are nestex within a component folder, because they are not shared by any other component
- `components/Icons`: Contains all icons
- `hooks`: Contains hooks used throught the application
- `interfaces`: Contains interfaces for types used throught the application
- `lib`: Contains a `finance` lib used to make the financial calculation
- `pages`: Contains the main components used for routing and views

# Components

- `HomePage`: Contains the initial view of the application
- `DebtsComponent`: Contains the logic to toggle the `DebtsInputsContainerComponent` and `CalculateDebtsComponent` controls the state for the debts array.
- `DebtsInputsContainerComponent`: Display list of debts and provides functionality to add new debts to the array and also to remove them.
- `DebtsInputComponent`: Controlled component for the inputs that are used to build a debt. It to make it reusable and also adds suffix/affix based on the type of input (money or percent)
- `CalculateDebtsComponent`: Displays the values based on the consolidated loan and sliders to modify those values. It makes usage of `finance` lib to make the calculations. It calculates the current payments and new payments seperatly.
- `FullButtonComponent`: A reusable full button
- `TransparentButtonComponent`: A reusable transparent button that takes in an icon
- `SliderComponent`: A controlled slider input
- `HeaderComponent`: A simple header component that is used in `HomePage` component

# Hooks

- `useHover`: A simple hook to control the hovered state of a div element

# Interfaces

- `Debt`: A debt interface

# Lib

- `finance`: A lib with helper functions to make the financial calculations based on the `Debt` properties

# Pages

- `HomePage`: Holds the main view
