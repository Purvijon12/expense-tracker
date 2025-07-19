let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("transaction-form");
const dateInput = document.getElementById("date");
const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const transactionsList = document.getElementById("transactions");

const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const netBalanceEl = document.getElementById("net-balance");

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function calculateSummary() {
  let income = 0, expense = 0;

  transactions.forEach(t => {
    if (t.category === "Income") {
      income += parseFloat(t.amount);
    } else {
      expense += parseFloat(t.amount);
    }
  });

  totalIncomeEl.textContent = income.toFixed(2);
  totalExpenseEl.textContent = expense.toFixed(2);
  netBalanceEl.textContent = (income - expense).toFixed(2);
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateLocalStorage();
  renderTransactions();
}

function renderTransactions() {
  transactionsList.innerHTML = "";

  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.classList.add("transaction-item");
    li.classList.add(t.category === "Income" ? "income" : "expense");

    li.innerHTML = `
      <span>${t.date}</span>
      <span>${t.description}</span>
      <span>${t.category}</span>
      <span>₹${parseFloat(t.amount).toFixed(2)}</span>
      <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>
    `;

    transactionsList.appendChild(li);
  });

  calculateSummary();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTransaction = {
    date: dateInput.value,
    description: descInput.value.trim(),
    amount: parseFloat(amountInput.value),
    category: categoryInput.value
  };

  if (!newTransaction.date || !newTransaction.description || !newTransaction.amount || !newTransaction.category) {
    alert("Please fill in all fields.");
    return;
  }

  transactions.push(newTransaction);
  updateLocalStorage();
  renderTransactions();
  form.reset();
});

renderTransactions();
