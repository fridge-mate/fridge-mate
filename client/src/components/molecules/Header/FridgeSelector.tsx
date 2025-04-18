//⚠️FridgeSelectorのstateによってhomeで表示するlistも変更するため今後reduxで管理するのがいい？
export type SelectedView = "fridge" | "expired"; // ⚠️将来 Redux に切り出す予定の型

//⚠️将来 useSlectorから取得するためProps自体必要なくなる
type FridgeSelectorProps = {
	selectedFridge: SelectedView;
	onChange: (view: SelectedView) => void;
};

const FridgeSelector: React.FC<FridgeSelectorProps> = ({
	selectedFridge,
	onChange,
}) => {
	return (
		<select
			id="fridge-selector"
			value={selectedFridge}
			onChange={(e) => onChange(e.target.value as SelectedView)}
			className={`border px-2 py-1 rounded ${selectedFridge === "fridge" ? "bg-white" : "bg-expired-light"}`}
		>
			<option value="fridge">fridge</option>
			<option value="expired">expired</option>
		</select>
	);
};

export default FridgeSelector;
