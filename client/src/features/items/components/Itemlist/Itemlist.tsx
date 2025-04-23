import { useState } from "react";
import { useFetchItemsQuery } from "@/features/items/hooks/useFetchItems";
import ItemCard, {
	type ItemCardProps,
} from "@/features/items/components/ItemCard/ItemCard";
import DetailModal from "@/features/items/components/modal/DetailModal";
import { useAtomValue } from "jotai";
import { selectedCategoryAtom } from "@/store/category";

const ItemList = () => {
	// const { data } = useFetchItems();
	const { data = [], isLoading, isError } = useFetchItemsQuery();
	const selectedCategory = useAtomValue(selectedCategoryAtom);
	const [selectedItem, setSelectedItem] = useState<ItemCardProps | null>(null);

	const handleOpenModal = (item: ItemCardProps) => {
		setSelectedItem(item);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

	const filteredItems =
		selectedCategory === "all"
			? data
			: data.filter((data) => data.category === selectedCategory);

	if (isLoading) return <p>is Loading...</p>;
	if (isError) return <p>發生錯誤，請重新載入頁面。</p>;

	return (
		<div>
			{filteredItems.map((item, index) => (
				<ItemCard
					key={item.itemId}
					{...item}
					onDetailClick={() => handleOpenModal(item)}
					className={index !== 0 ? "border-t-0" : ""}
				/>
			))}
			{selectedItem && (
				<DetailModal
					isOpen={!!selectedItem}
					onClose={handleCloseModal}
					item={selectedItem}
				/>
			)}
		</div>
	);
};

export default ItemList;
