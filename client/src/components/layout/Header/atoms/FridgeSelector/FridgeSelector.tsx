import type { SelectedView } from "@/components/layout/Header/Header";
import Select from "@/components/atoms/Select/Select";

type FridgeSelectorProps = {
	selectedFridge: SelectedView;
	onChange: (view: SelectedView) => void;
};

const FridgeSelector: React.FC<FridgeSelectorProps> = ({
	selectedFridge,
	onChange,
}) => {
	return (
		<Select
			value={selectedFridge}
			onChange={(val) => onChange(val as SelectedView)}
			placeholder="請選擇保管清單"
			options={[
				{ label: "冰箱中的物品", value: "fridge" },
				{ label: "已過期項目", value: "expired" },
			]}
			className={`w-[143px] ${
				selectedFridge === "fridge" ? "bg-white" : "bg-expired-light"
			}`}
		/>
	);
};

export default FridgeSelector;
