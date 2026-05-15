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
  | "General";

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

export type Pot = {
  id: string;
  user_id: string;
  name: string;
  target: number;
  saved: number;
  theme: string;
};
