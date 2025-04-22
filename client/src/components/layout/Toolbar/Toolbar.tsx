import SearchBar from "@/components/layout/Toolbar/atoms/SerchBar/SearchBar";
import Button from "@/components/atoms/Button/Button";
import CategorySelector from "@/components/layout/Toolbar/atoms/CategorySelector/CategorySelector";

const Toolbar = () => {
	return (
		<div>
			<div>
				<SearchBar />
			</div>
			<div className="flex justify-around border border-black py-4 border-t-0">
				<CategorySelector />
				<Button text="排序" onClick={() => alert("進行排序")} />
				{/* stateに合わせて↑か↓を変更できるようにする */}
				<Button
					text="清除過期項目"
					onClick={() => alert("已刪除過期項目！")}
					className="bg-red-200 text-black border border-red-300 px-4 py-2"
				/>
			</div>
		</div>
	);
};

export default Toolbar;
