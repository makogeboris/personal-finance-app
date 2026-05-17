export const CATEGORIES = [
  { label: "Entertainment", value: "Entertainment" },
  { label: "Bills", value: "Bills" },
  { label: "Groceries", value: "Groceries" },
  { label: "Dining Out", value: "Dining Out" },
  { label: "Transportation", value: "Transportation" },
  { label: "Personal Care", value: "Personal Care" },
  { label: "Education", value: "Education" },
  { label: "Lifestyle", value: "Lifestyle" },
  { label: "Shopping", value: "Shopping" },
  { label: "General", value: "General" },
];

export const COLORS = [
  { name: "Green", value: "green", class: "bg-green" },
  { name: "Yellow", value: "yellow", class: "bg-yellow" },
  { name: "Cyan", value: "cyan", class: "bg-cyan" },
  { name: "Navy", value: "navy", class: "bg-navy" },
  { name: "Red", value: "red", class: "bg-red" },
  { name: "Purple", value: "purple", class: "bg-purple" },
  { name: "Purple Light", value: "purple-light", class: "bg-purple-light" },
  { name: "Turquoise", value: "turquoise", class: "bg-turquoise" },
  { name: "Brown", value: "brown", class: "bg-brown" },
  { name: "Magenta", value: "magenta", class: "bg-magenta" },
  { name: "Blue", value: "blue", class: "bg-blue" },
  { name: "Navy Grey", value: "navy-grey", class: "bg-navy-grey" },
  { name: "Army Green", value: "army-green", class: "bg-army-green" },
  { name: "Gold", value: "gold", class: "bg-gold" },
  { name: "Orange", value: "orange", class: "bg-orange" },
];

export const COLOR_MAP: Record<string, string> = {
  green: "#277C78",
  yellow: "#F2CDAC",
  cyan: "#82C9D7",
  navy: "#626070",
  red: "#C94736",
  purple: "#826CB0",
  "purple-light": "#AF81BA",
  turquoise: "#597C7C",
  brown: "#93674F",
  magenta: "#934F6F",
  blue: "#3F82B2",
  "navy-grey": "#97A0AC",
  "army-green": "#7F9161",
  gold: "#CAB361",
  orange: "#BE6C49",
};

export const COLOR_MAP_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(COLOR_MAP).map(([name, hex]) => [hex, name]),
);
