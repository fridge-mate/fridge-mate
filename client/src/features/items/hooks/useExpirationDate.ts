//残り日数（マイナスも可）から西暦を計算
export const useExpirationDate = (daysLeft: number): string => {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + daysLeft);
	return expirationDate.toLocaleDateString();
};
