import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
