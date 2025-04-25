import { useState } from "react";
import { useFetchItems } from "@/features/items/hooks/useFetchItems";
import ItemCard, {
	type ItemCardProps,
} from "@/features/items/components/ItemCard/ItemCard";
import DetailModal from "@/features/items/components/modal/DetailModal";

const ItemList = () => {
	const { data } = useFetchItems();
	const [selectedItem, setSelectedItem] = useState<ItemCardProps | null>(null);

	const handleOpenModal = (item: ItemCardProps) => {
		setSelectedItem(item);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

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
