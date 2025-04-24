import { useAtomValue } from "jotai";
import type { ItemCardProps } from "./../components/ItemCard/ItemCard";
import { useFetchItemsQuery } from "@/features/items/hooks/useFetchItems";
import { selectedCategoryAtom } from "@/store/category";
import { selectedFridgeAtom } from "@/store/fridge";

export const useFilteredItems = () => {
	const { data = [], isLoading, isError } = useFetchItemsQuery();
	const selectedCategory = useAtomValue(selectedCategoryAtom);
	const selectedFridge = useAtomValue(selectedFridgeAtom);

	const filteredItems = data.filter((item: ItemCardProps) => {
		const matchCategory =
			selectedCategory === "all" || item.category === selectedCategory;
		const matchView = selectedFridge === "fridge" || item.daysLeft <= 0;
		return matchCategory && matchView;
	});

	return { data: filteredItems, isLoading, isError };
};
