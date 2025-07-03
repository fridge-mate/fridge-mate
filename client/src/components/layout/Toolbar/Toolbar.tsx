import { useAtom } from "jotai";
import type { GenreSelectorKey } from "@/types/genre";
import SearchBar from "@/components/layout/Toolbar/atoms/SerchBar/SearchBar";
import Button from "@/components/atoms/Button/Button";
import CategorySelector from "@/components/atoms/CategorySelector";
import { useDeleteAllExpiredMutation } from "@/features/items/hooks/useDeleteItemMutation";
import { selectedCategoryAtom } from "@/store/category";

const Toolbar = () => {
	const { mutate } = useDeleteAllExpiredMutation();
	const [selectedCategory, setSelectedCategory] =
		useAtom<GenreSelectorKey>(selectedCategoryAtom);
	return (
		<div>
			<div>
				<SearchBar />
			</div>
			<div className="flex justify-around border border-black py-4 border-t-0">
				<CategorySelector
					state={selectedCategory}
					setState={setSelectedCategory}
				/>
				<Button text="排序" onClick={() => alert("進行排序")} />
				{/* stateに合わせて↑か↓を変更できるようにする */}
				<Button
					text="清除過期項目"
					onClick={() => mutate()}
					className="bg-red-200 text-black border border-red-300 px-4 py-2"
				/>
			</div>
		</div>
	);
};

export default Toolbar;
