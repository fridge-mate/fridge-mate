import { useState } from "react";
import EditButton from "@/components/molecules/Header/headerAtoms/EditButton/EditButton";
import FridgeSelector from "@/components/molecules/Header/headerAtoms/FridgeSelector/FridgeSelector";

// ⚠️将来 Redux に切り出す予定の型
export type SelectedView = "fridge" | "expired";

const Header = () => {
	// ⚠️（Redux設定後）useSlectorでstateを取得
	const [selectedFridge, setSelectedFridge] = useState<SelectedView>("fridge");
	return (
		<header className="flex items-center justify-between px-4 py-2 border-b">
			<FridgeSelector
				selectedFridge={selectedFridge}
				onChange={setSelectedFridge} //⚠️（Redux設定後）dispatchに変更
			/>
			<EditButton />
		</header>
	);
};

export default Header;
