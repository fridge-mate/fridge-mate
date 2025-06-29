// item 削除
export const deleteItem = async (itemId: string): Promise<void> => {
	//backができたら実装（現在は方エラーを避けるためにsetTimeoutを使用）
	return new Promise((resolve) => {
		console.log(`削除: ${itemId}`);
		setTimeout(() => resolve(), 300);
	});
};

//expired items 一括消去
export const deleteAllExpired = async (): Promise<void> => {
	return new Promise((resolve) => {
		console.log("called deleteAllExpired api");
		setTimeout(() => resolve(), 300);
	});
};
