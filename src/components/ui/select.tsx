import * as React from "react";

// Main Select context
const SelectContext = React.createContext<any>(null);

export function Select({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [value, setValue] = React.useState("");
  return (
    <SelectContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { value } = React.useContext(SelectContext);
  return (
    <button
      type="button"
      className="w-full rounded-lg bg-white/20 px-4 py-2 text-white outline-none border border-white/30 focus:border-emerald-400 transition-all duration-200 shadow-md focus:shadow-emerald-500/30 flex justify-between items-center"
      {...props}
    >
      {children || value || "Select..."}
      <span className="ml-2">▼</span>
    </button>
  );
}

export function SelectContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="absolute mt-2 w-full rounded-lg bg-gray-800 border border-white/30 shadow-lg z-50"
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectItem({ children, value, ...props }: { value: string; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const { setValue } = React.useContext(SelectContext);
  return (
    <div
      className="px-4 py-2 cursor-pointer hover:bg-emerald-500/20 text-white"
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SelectValue({ children }: { children?: React.ReactNode }) {
  const { value } = React.useContext(SelectContext);
  return <span>{children || value}</span>;
} 