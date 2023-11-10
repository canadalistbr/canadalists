'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

export function QueryProvider({ children }: PropsWithChildren<{}>) {

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}