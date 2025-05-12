import type { ReactNode } from "react";
import { ReactQueryProvider } from "@/app/providers/react-query-provider";

type ProvidersProps = {
	children: ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
