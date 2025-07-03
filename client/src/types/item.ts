import type { GenreKey } from "@/types/genre";

export type ItemType = {
	itemId: string;
	name: string;
	imageUrl?: string;
	daysLeft: number;
	category: GenreKey;
	quantity: number;
	className?: string;
	memo: string;
};
