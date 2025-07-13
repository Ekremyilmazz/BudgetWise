# BudgetWise – A Personal Budget Tracker App
Manage Your Income and Expenses with Redux Toolkit

## 1. Project Objective
The goal of this project was to build a realistic personal finance tracking application where users can manage their income and expenses. It was designed to demonstrate core and intermediate concepts of Redux Toolkit, such as slices, reducers, middleware, and async actions, in a real-world scenario.

## 2. Core Features
The BudgetWise app includes the following core features:
- ✅ Add income and expense entries 
- ✅ Add and Delete transactions 
- ✅ View total income, total expenses, and remaining balance 
- ✅ Filter transactions by category or type 
- ✅ All financial data is stored and managed via Redux Toolkit 
- ✅ Optional charts to visualize spending trends over time 

## 3. Technologies Used
This project was built using the following technologies:
React (with Vite): UI library 
Redux Toolkit: State management 
TypeScript (optional): Type safety 
CSS: Styling 
Chart.js or Recharts (optional): Data visualization 
LocalStorage: For persisting data between sessions 

## 4. Why Redux Toolkit?
Redux Toolkit was chosen for this project to:
Avoid boilerplate code using 
createSlice and configureStore 
Simplify state logic and action creation 
Enable better debugging with Redux DevTools 
Demonstrate real-world usage of global state management 

## 5. Installation and Local Setup

1. Clone the repository

   ```bash
   https://github.com/Ekremyilmazz/BudgetWise.git
2. Navigate to the project directory:
   ```
   cd Budgetwise
3. Install dependencies:
   ```
   npm install
4. Run the development server:
   ```bash
   npm run dev

## 6. Deployment
The project is deployed on Vercel. Since the app relies on Redux Toolkit and 
localStorage to manage and persist state, a backend or database is not required at this stage.

You can view the live demo here: [https://budget-wise-tau.vercel.app/]

## 7. Future Improvements
Future iterations of the project could integrate a backend like Firebase or a Node.js backend for user authentication and data storage, removing the reliance on 
localStorage for data persistence.
