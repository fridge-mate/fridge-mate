import { twMerge } from "tailwind-merge";
import type { GenreKey } from "@/types/genre";
import Select from "@/components/atoms/Select/Select";

type LabelProps = {
	// EditData?: EditDataType;
	isSelect: boolean;
	genreKey?: GenreKey;
	className?: string;
};

const genreMap: Record<GenreKey, { name: string; color: string }> = {
	fruit: { name: "水果", color: "bg-yellow-200" },
	vegetable: { name: "蔬菜", color: "bg-green-200" },
	meat: { name: "肉類", color: "bg-red-300" },
	drink: { name: "飲料", color: "bg-blue-200" },
	seasoning: { name: "調味料", color: "bg-purple-200" },
};
const genreOptions = [
	{ value: "all", label: "未選擇" },
	{ value: "fruit", label: "水果" },
	{ value: "vegetable", label: "蔬菜" },
	{ value: "meat", label: "肉類" },
	{ value: "drink", label: "飲料" },
	{ value: "seasoning", label: "調味料" },
];

//表示する際にisSelectで選択変更可能なlabelかreadonlyかで表示を変更する
export default function Label({ genreKey, className, isSelect }: LabelProps) {
	const genre = genreKey ? genreMap[genreKey] : { name: "未選擇", color: "" };

	const baseClass =
		"px-2 py-1.5 rounded-xl border border-black text-xs text-black";
	const mergedClass = twMerge(genre.color, baseClass, className);

	return isSelect ? (
		<Select
			value={genreKey ?? "all"}
			// onChange={(val) => setLabelVal(val as GenreSelectorKey)}
			onChange={() => console.log("")}
			placeholder="請選擇分類"
			options={genreOptions}
			className={twMerge("w-[120px]", mergedClass)}
		/>
	) : (
		<span className={mergedClass}>{genre.name}</span>
	);
}
