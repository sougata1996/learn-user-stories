// Indicates the type for all bank accounts in the bank
interface BankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
  // Array to store all bank accounts in the bank
  private accounts: BankAccount[] = [];

  /**
   * Method to find a bank account in the bank
   * @param {string} accountNumber Account number of the bank account to find
   * @returns Bank account if found, undefined otherwise
   */
  private findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
  }

  /**
   * Creates a new account with a unique account number
   * @param name -- name of the customer
   * @param age -- age of the customer
   * @param accountNumber -- account number of the customer
   * @returns BankAccount -- the created account
   */
  public createAccount(
    name: string,
    age: number,
    accountNumber: string
  ): BankAccount {
    const isAccExists = this.findAccount(accountNumber);
    if (isAccExists) {
      throw new Error("Account already exists");
    }
    const account: BankAccount = {
      name,
      age,
      accountNumber,
      balance: 0,
    };
    this.accounts.push(account);
    return account;
  }

  /**
   * Withdraws money from a bank account
   * @param accountNumber -- the account number to withdraw money from
   * @param amount -- the amount of money to withdraw
   * @returns the updated bank account with the new balance
   */
  public withdraw(accountNumber: string, amount: number): BankAccount {
    const account = this.findAccount(accountNumber);

    if (!account) {
      throw new Error("Account not found");
    }

    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero");
    }

    if (account.balance < amount) {
      throw new Error("Insufficient balance");
    }

    account.balance -= amount;
    return account;
  }
}
