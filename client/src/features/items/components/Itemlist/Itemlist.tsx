import { useState } from "react";
import { useFilteredItems } from "@/features/items/hooks/useFilteredItems";
import { useInfoModal } from "@/features/items/hooks/useInfoModal";
import ItemCard, {
	type ItemCardProps,
} from "@/features/items/components/ItemCard/ItemCard";
import DetailModal from "@/features/items/components/modal/DetailModal";
import InfoModal from "@/components/modals/InfoModal";

const ItemList = () => {
	const { data = [], isLoading, isError } = useFilteredItems();
	const [selectedItem, setSelectedItem] = useState<ItemCardProps | null>(null);

	const {
		isOpen: isInfoModalOpen,
		content: infoModalContent,
		showModal,
		closeModal,
	} = useInfoModal();

	const handleOpenModal = (item: ItemCardProps) => {
		setSelectedItem(item);
	};

	const handleCloseModal = () => {
		setSelectedItem(null);
	};

	if (isLoading) return <p>is Loading...</p>;
	if (isError) return <p>發生錯誤，請重新載入頁面。</p>;

	return (
		<div>
			{data.length === 0 ? (
				<p className="text-center">目前沒有任何項目</p>
			) : (
				data.map((item, index) => (
					<ItemCard
						key={item.itemId}
						{...item}
						onDetailClick={() => handleOpenModal(item)}
						className={index !== 0 ? "border-t-0" : ""}
					/>
				))
			)}

			{selectedItem && (
				<DetailModal
					isOpen={!!selectedItem}
					onClose={handleCloseModal}
					item={selectedItem}
					onDeleteSuccess={() => {
						showModal("deleteSuccess");
						setSelectedItem(null);
					}}
					onDeleteError={() => {
						showModal("deleteError");
					}}
				/>
			)}

			{isInfoModalOpen && (
				<InfoModal
					isOpen={isInfoModalOpen}
					onClose={closeModal}
					title={infoModalContent.title}
					description={infoModalContent.description}
				/>
			)}
		</div>
	);
};

export default ItemList;
