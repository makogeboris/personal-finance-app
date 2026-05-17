export type Category =
  | "Entertainment"
  | "Bills"
  | "Groceries"
  | "Dining Out"
  | "Transportation"
  | "Personal Care"
  | "Education"
  | "Lifestyle"
  | "Shopping"
  | "General"
  | "All";

export type SortOption =
  | "latest"
  | "oldest"
  | "a-z"
  | "z-a"
  | "highest"
  | "lowest";

export type Transaction = {
  id: string;
  user_id: string;
  name: string;
  amount: number;
  category: Category;
  date: string;
  recurring: boolean;
  avatar: string;
};

export type Budget = {
  id: string;
  user_id: string;
  category: Category;
  maximum: number;
  theme: string;
};

export type BudgetWithData = Budget & {
  spent: number;
  remaining: number;
  latestTransactions: Transaction[];
};

export type Pot = {
  id: string;
  user_id: string;
  name: string;
  target: number;
  saved: number;
  theme: string;
};
