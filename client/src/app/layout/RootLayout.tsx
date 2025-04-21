import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default RootLayout;
