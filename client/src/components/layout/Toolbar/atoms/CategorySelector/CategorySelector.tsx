import Select from "@/components/atoms/Select/Select";
import { selectedCategoryAtom } from "@/store/category";
import type { GenreKey } from "@/types/genre";
import { useAtom } from "jotai";

const genreOptions = [
	{ value: "all", label: "未選擇" },
	{ value: "fruit", label: "水果" },
	{ value: "vegetable", label: "蔬菜" },
	{ value: "meat", label: "肉類" },
	{ value: "drink", label: "飲料" },
	{ value: "seasoning", label: "調味料" },
];

const CategorySelector: React.FC = () => {
	const [selectedCategory, setSelectedCategory] =
		useAtom<GenreKey>(selectedCategoryAtom);
	return (
		<Select
			value={selectedCategory}
			onChange={(val) => setSelectedCategory(val as GenreKey)}
			placeholder="請選擇分類"
			options={genreOptions}
			className="w-[160px]"
		/>
	);
};

export default CategorySelector;
