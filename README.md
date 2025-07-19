# 💸 Expense Tracker Web Application

A modern, responsive, and fully functional **Expense Tracker** built using **HTML, CSS, and JavaScript**.

This app allows users to manage their finances by tracking income and expenses with real-time summary calculations, category tagging, and local data storage.

---

## 🚀 How to Use the Application

1. **Open the App**
   - Download the folder or clone the repo.
   - Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).

2. **Add a Transaction**
   - Select a **date**
   - Enter a **description** (e.g., Salary, Food, Rent)
   - Enter an **amount** (in ₹)
   - Choose a **category**:
     - Income
     - Food
     - Transport
     - Entertainment
     - Shopping

   - Click **"Add Transaction"**

3. **View Your Finances**
   - The app will automatically calculate and display:
     - 💰 Total Income
     - 💸 Total Expense
     - 🔢 Net Balance (Income - Expenses)

4. **Manage Transactions**
   - Each transaction appears in a list with color-coded category indicators.
   - Use the **Delete** button to remove a transaction.
   - All data is saved in **localStorage** and remains even after closing the browser.

---

## 📁 Project File Structure
📦 expense-tracker/
├── index.html # Main HTML layout of the app
├── style.css # Styling and responsive UI design
├── script.js # JavaScript logic, DOM interaction, data handling
└── README.md # Instructions and documentation (this file)

## 🔍 Code Structure Explanation

### 1. `index.html`
- Defines the structure of the Expense Tracker app
- Contains:
  - Header title
  - Summary cards for Income, Expense, and Balance
  - Transaction input form (date, description, amount, category)
  - Transaction list (display area)

### 2. `style.css`
- Provides modern, clean, and responsive styling using:
  - Flexbox and grid layout
  - Card-based components
  - Mobile-first responsive design
  - Category-specific color coding

### 3. `script.js`
Handles the core logic:
- **Form Submission**: Captures user input
- **Validation**: Ensures no empty or invalid values
- **Transaction Management**:
  - Adds a transaction to the local array and DOM
  - Saves the array to `localStorage`
  - Deletes selected transactions
- **Calculations**:
  - Dynamically computes total income, expense, and net balance
- **Persistence**:
  - Loads transactions from `localStorage` on page load

---

## 🎯 Features

✅ Add Income and Expenses  
✅ Categorize Transactions  
✅ Total, Expense & Balance Summary  
✅ Delete Transactions  
✅ Responsive Design for Mobile and Desktop  
✅ Local Storage for Data Persistence  
✅ Color-Coded Category Display  
✅ Form Validation for Safe Input  

---

## 📈 Possible Future Enhancements

- 🔍 Filter by category or date range  
- 📊 Visualize data using pie charts (Chart.js)  
- ✏️ Edit/Update transactions  
- ☁️ Export/Import data to/from CSV or JSON  
- 🌙 Dark Mode toggle  

## 📝 License

This project is licensed under the **MIT License** — free to use and modify for learning or development purposes.

---

Enjoy tracking your expenses and mastering your money! 💸✨

