import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/app/App";
import { Providers } from "@/lib/provider/providers";

const container = document.getElementById("root");

if (container) {
	createRoot(container).render(
		<StrictMode>
			<Providers>
				<App />
			</Providers>
		</StrictMode>,
	);
}
