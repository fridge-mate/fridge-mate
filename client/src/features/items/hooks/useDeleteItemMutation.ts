import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ItemCardProps } from "../components/ItemCard/ItemCard";
import { deleteItem, deleteAllExpired } from "@/lib/api/items";

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

export const useDeleteAllExpiredMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteAllExpired,
		onSuccess: () => {
			//backが完成したら[キャッシュからfilter]から[変更されたdbを取得し直す]に変更
			queryClient.setQueryData<ItemCardProps[]>(["items"], (old) =>
				old ? old.filter((item) => item.daysLeft > 0) : [],
			);
		},
	});
};
