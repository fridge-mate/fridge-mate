import { useState } from "react";
import { useFilteredItems } from "@/features/items/hooks/useFilteredItems";
import ItemCard, {
	type ItemCardProps,
} from "@/features/items/components/ItemCard/ItemCard";
import DetailModal from "@/features/items/components/modal/DetailModal";

const ItemList = () => {
	const { data = [], isLoading, isError } = useFilteredItems();
	const [selectedItem, setSelectedItem] = useState<ItemCardProps | null>(null);

	const handleOpenModal = (item: ItemCardProps) => {
		setSelectedItem(item);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

	if (isLoading) return <p>is Loading...</p>;
	if (isError) return <p>發生錯誤，請重新載入頁面。</p>;
	if (data.length === 0) {
		return <p>沒有符合條件的項目。</p>;
	}

	return (
		<div>
			{data.map((item, index) => (
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
