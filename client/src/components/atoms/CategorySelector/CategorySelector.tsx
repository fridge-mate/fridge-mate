import Select from "@/components/atoms/Select/Select";
import { twMerge } from "tailwind-merge";
import type { GenreSelectorKey } from "@/types/genre";

//need fix (optionはuserのitemとかからデフォルト選択肢を増やすことを可能にする)
const genreOptions = [
	{ value: "all", label: "未選擇" },
	{ value: "fruit", label: "水果" },
	{ value: "vegetable", label: "蔬菜" },
	{ value: "meat", label: "肉類" },
	{ value: "drink", label: "飲料" },
	{ value: "seasoning", label: "調味料" },
];

type CategorySelectorProps = {
	state: GenreSelectorKey;
	setState: (vallue: GenreSelectorKey) => void;
	className?: string;
};
const CategorySelector: React.FC<CategorySelectorProps> = ({
	state,
	setState,
	className,
}) => {
	return (
		<Select
			value={state}
			onChange={(val) => setState(val as GenreSelectorKey)}
			placeholder="請選擇分類"
			options={genreOptions}
			className={twMerge("w-[120px]", className)}
		/>
	);
};

export default CategorySelector;
