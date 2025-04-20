import { useState } from "react";
import type { GenreKey } from "@/types/genre";
import SearchBar from "@/features/Toolbar/atoms/SerchBar/SearchBar";
import Button from "@/components/atoms/Button/Button";
import CategorySelector from "@/features/Toolbar/atoms/CategorySelector/CategorySelector";

const Toolbar = () => {
	//typeに関してdefault準備する必要もある
	const [selectedCategory, setSelectedCategory] = useState<GenreKey>("fruit");
	return (
		<div>
			<div>
				<SearchBar />
			</div>
			<div className="flex justify-around border border-black py-4 border-t-0">
				<CategorySelector
					selectedCategory={selectedCategory}
					onChange={setSelectedCategory}
				/>
				<Button text="排序" onClick={() => alert("進行排序")} />
				{/* stateに合わせて↑か↓を変更できるようにする */}
				<Button
					text="清除過期項目"
					onClick={() => alert("已刪除過期項目！")}
					className="bg-red-200 text-black border border-red-300 px-4 py-2 rounded-md"
				/>
			</div>
		</div>
	);
};

export default Toolbar;
