import Select from "@/components/atoms/Select/Select";
import type { GenreKey } from "@/types/genre";

//⚠️(Redux後)propsではなくuseSlector&dispatchを使用する
type CategorySelectorProps = {
	selectedCategory: GenreKey;
	onChange: (value: GenreKey) => void;
};

const genreOptions = [
	{ value: "fruit", label: "水果" },
	{ value: "vegetable", label: "蔬菜" },
	{ value: "meat", label: "肉類" },
	{ value: "drink", label: "飲料" },
	{ value: "seasoning", label: "調味料" },
];

const CategorySelector: React.FC<CategorySelectorProps> = ({
	//⚠️(Redux後)propsではなくuseSlector&dispatchを使用する
	selectedCategory,
	onChange,
}) => {
	return (
		<Select
			value={selectedCategory}
			onChange={(val) => onChange(val as GenreKey)}
			placeholder="請選擇分類"
			options={genreOptions}
			className="w-[160px]"
		/>
	);
};

export default CategorySelector;
