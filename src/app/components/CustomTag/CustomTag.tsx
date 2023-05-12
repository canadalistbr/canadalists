import { ReactNode } from "react";

export function CustomTag({ children }: { children: ReactNode }) {
    return (
      <span className="px-2 py-1 border rounded-sm border-gray">{children}</span>
    )
  }
  