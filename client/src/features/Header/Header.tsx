import { useState } from "react";
import EditButton from "@/features/Header/atoms/EditButton/EditButton";
import FridgeSelector from "@/features/Header/atoms/FridgeSelector/FridgeSelector";

// ⚠️将来 Redux に切り出す予定の型
export type SelectedView = "fridge" | "expired";

const Header = () => {
	// ⚠️（Redux設定後）useSlectorでstateを取得
	const [selectedFridge, setSelectedFridge] = useState<SelectedView>("fridge");
	return (
		<header>
			<div className="flex items-center justify-between px-4 py-2 border-b">
				<FridgeSelector
					selectedFridge={selectedFridge}
					onChange={setSelectedFridge} //⚠️（Redux設定後）dispatchに変更
				/>
				<EditButton />
			</div>
		</header>
	);
};

export default Header;
