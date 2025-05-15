import { useAtomValue, useSetAtom } from "jotai";
import {
	selectedFridgeAtom,
	setFridgeViewAtom,
	type SelectedView,
} from "@/store/fridge";
import Select from "@/components/atoms/Select/Select";

const FridgeSelector: React.FC = () => {
	const selectedFridge = useAtomValue(selectedFridgeAtom);
	const setFridgeView = useSetAtom(setFridgeViewAtom);
	return (
		<Select
			value={selectedFridge}
			onChange={(val: SelectedView) => setFridgeView(val)}
			placeholder="請選擇保管清單"
			options={[
				{ label: "冰箱中的物品", value: "fridge" },
				{ label: "已過期項目", value: "expired" },
			]}
			className={`w-[126px] py-1 text-xs ${
				selectedFridge === "fridge" ? "bg-white" : "bg-expired-light"
			}`}
		/>
	);
};

export default FridgeSelector;
