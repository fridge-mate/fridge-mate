import { useState } from "react";
<<<<<<< HEAD
import { useFilteredItems } from "@/features/items/hooks/useFilteredItems";
=======
import { useFetchItems } from "@/features/items/hooks/useFetchItems";
>>>>>>> 93dd262 (feat(modal): implement ItemDetailModal component to display item info)
import ItemCard, {
	type ItemCardProps,
} from "@/features/items/components/ItemCard/ItemCard";
import DetailModal from "@/features/items/components/modal/DetailModal";
<<<<<<< HEAD

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

=======

const ItemList = () => {
	const { data } = useFetchItems();
	const [selectedItem, setSelectedItem] = useState<ItemCardProps | null>(null);

	const handleOpenModal = (item: ItemCardProps) => {
		setSelectedItem(item);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

>>>>>>> 93dd262 (feat(modal): implement ItemDetailModal component to display item info)
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
