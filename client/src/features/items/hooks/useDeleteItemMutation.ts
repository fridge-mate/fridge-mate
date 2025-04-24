import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ItemCardProps } from "../components/ItemCard/ItemCard";

const deleteItem = async (itemId: string): Promise<void> => {
	//backができたら実装（現在は方エラーを避けるためにsetTimeoutを使用）
	return new Promise((resolve) => {
		console.log(`削除: ${itemId}`);
		setTimeout(() => resolve(), 300);
	});
};

export const useDeleteItemMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteItem,
		onSuccess: (_, deletedItemId) => {
			queryClient.setQueryData<ItemCardProps[]>(["items"], (old) =>
				old ? old.filter((item) => item.itemId !== deletedItemId) : [],
			);
		},
	});
};
