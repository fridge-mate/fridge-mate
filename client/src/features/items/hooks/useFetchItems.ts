import type { ItemCardProps } from "@/features/items/components/ItemCard/ItemCard";
import { useQuery } from "@tanstack/react-query";
import type { GenreKey } from "@/types/genre";

//今後ここはend pointとdbが完成したらmockから置き換える
const useFetchItems = async (): Promise<ItemCardProps[]> => {
	return [
		{
			itemId: "item-1",
			name: "胡蘿蔔",
			imageUrl: "/images/items/carrot.webp",
			daysLeft: 3,
			category: "vegetable" as GenreKey,
			quantity: 2,
			onDetailClick: () => console.log("item-1 clicked"),
		},
		{
			itemId: "item-2",
			name: "牛奶",
			imageUrl: "/images/items/milk.webp",
			daysLeft: -2,
			category: "drink" as GenreKey,
			quantity: 1,
			onDetailClick: () => console.log("item-2 clicked"),
		},
		{
			itemId: "item-3",
			name: "蘋果",
			imageUrl: "/images/items/apple.webp",
			daysLeft: 5,
			category: "fruit" as GenreKey,
			quantity: 3,
			onDetailClick: () => console.log("item-3 clicked"),
		},
	];
};

export const useFetchItemsQuery = () => {
	return useQuery<ItemCardProps[]>({
		queryKey: ["items"],
		queryFn: useFetchItems,
	});
};
