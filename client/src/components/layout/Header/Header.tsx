import EditButton from "@/components/layout/Header/atoms/EditButton/EditButton";
import FridgeSelector from "@/components/layout/Header/atoms/FridgeSelector/FridgeSelector";

const Header = () => {
	return (
		<header>
			<div className="flex items-center justify-between px-4 py-2 border-b">
				<FridgeSelector />
				<EditButton />
			</div>
		</header>
	);
};

export default Header;
