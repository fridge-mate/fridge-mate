import { useFetchItems } from "@/features/items/hooks/useFetchItems";
import ItemCard from "@/features/items/components/ItemCard/ItemCard";

const Itemlist = () => {
	const { data } = useFetchItems();
	return (
		<div>
			{data.map((item, index) => (
				<ItemCard
					key={item.itemId}
					{...item}
					className={index !== 0 ? "border-t-0" : ""}
				/>
			))}
		</div>
	);
};

export default Itemlist;
