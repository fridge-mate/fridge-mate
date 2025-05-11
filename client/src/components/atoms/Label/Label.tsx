import { twMerge } from "tailwind-merge";
import type { GenreKey } from "@/types/genre";

type LabelProps = {
	genreKey: GenreKey;
	className?: string;
};

const genreMap: Record<GenreKey, { name: string; color: string }> = {
	fruit: { name: "水果", color: "bg-yellow-200" },
	vegetable: { name: "蔬菜", color: "bg-green-200" },
	meat: { name: "肉類", color: "bg-red-300" },
	drink: { name: "飲料", color: "bg-blue-200" },
	seasoning: { name: "調味料", color: "bg-purple-200" },
};

export default function Label({ genreKey, className }: LabelProps) {
	const genre = genreMap[genreKey];

	const baseClass =
		"px-2 py-1.5 rounded-xl border border-black text-xs text-black";
	const mergedClass = twMerge(genre.color, baseClass, className);

	return <span className={mergedClass}>{genre.name}</span>;
}
