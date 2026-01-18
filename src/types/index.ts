export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'pending' | 'completed';

export interface FamilyMember {
    id: string;
    name: string;
    role: string;
    avatarUrl?: string;
    income: number;
}

export interface BankAccount {
    id: string;
    name: string;
    balance: number;
    initialBalance: number;
    holderId: string;
}

export interface CreditCard {
    id: string;
    name: string;
    limit: number;
    currentBill: number;
    closingDay: number;
    dueDay: number;
    lastDigits?: string;
    theme: 'black' | 'lime' | 'white';
    holderId: string;
}

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    date: string; // ISOString
    type: TransactionType;
    category: string;
    accountId: string; // Can be bankAccount or creditCard ID
    memberId: string | null; // null represents "General/Family"
    status: TransactionStatus;
    isRecurring: boolean;
    isPaid: boolean;
    installments?: number; // 1 for single payment
    currentInstallment?: number;
}

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline: string;
}
