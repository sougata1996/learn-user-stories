import Bank from "../src/bank";

// Setup
const bank = new Bank();

// Scenario 1 - Create an account
const account = bank.createAccount("John Doe", 29, "2938298");
if (account.accountNumber === "2938298") {
  console.log("Scenario 1 passed");
} else {
  console.log("Scenario 1 failed");
}

// Scenario 2 - Create an account with an existing account number
try {
  bank.createAccount("John Doe", 29, "2938298");
  console.log("Scenario 2 failed");
} catch (_) {
  console.log("Scenario 2 passed");
}

// Scenario 3 - Withdraw money from the account (insufficient balance)
try {
  bank.withdraw("2938298", 50);
  console.log("Scenario 3 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Insufficient balance") {
    console.log("Scenario 3 passed");
  } else {
    console.log("Scenario 3 failed");
  }
}

// Scenario 4 - Deposit and withdraw money successfully
account.balance = 100; // Directly setting balance for testing purposes
try {
  const updatedAccount = bank.withdraw("2938298", 50);
  if (updatedAccount.balance === 50) {
    console.log("Scenario 4 passed");
  } else {
    console.log("Scenario 4 failed");
  }
} catch (_) {
  console.log("Scenario 4 failed");
}

// Scenario 5 - Withdraw from a non-existing account
try {
  bank.withdraw("non-existent-account", 50);
  console.log("Scenario 5 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account not found") {
    console.log("Scenario 5 passed");
  } else {
    console.log("Scenario 5 failed");
  }
}

// Scenario 6 - Withdraw with a non-positive amount (amount <= 0)
try {
  bank.withdraw("2938298", -10);
  console.log("Scenario 6 failed");
} catch (e) {
  if (
    e instanceof Error &&
    e.message === "Withdrawal amount must be greater than zero"
  ) {
    console.log("Scenario 6 passed");
  } else {
    console.log("Scenario 6 failed");
  }
}

try {
  bank.withdraw("2938298", 0);
  console.log("Scenario 7 failed");
} catch (e) {
  if (
    e instanceof Error &&
    e.message === "Withdrawal amount must be greater than zero"
  ) {
    console.log("Scenario 7 passed");
  } else {
    console.log("Scenario 7 failed");
  }
}

// Scenario 8 - Check balance of an existing account
try {
  const balance = bank.checkBalance("2938298");
  if (balance === 50) {
    console.log("Scenario 8 passed");
  } else {
    console.log("Scenario 8 failed");
  }
} catch (_) {
  console.log("Scenario 8 failed");
}

// Scenario 9 - Check balance of a non-existent account
try {
  bank.checkBalance("non-existent-account");
  console.log("Scenario 9 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account not found") {
    console.log("Scenario 9 passed");
  } else {
    console.log("Scenario 9 failed");
  }
}
