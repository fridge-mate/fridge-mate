import type { GenreKey } from "@/types/genre";
//商品ジャンルを受けとりそこからtext（ex.野菜）とtheme color（ex.green）を表示する様にする
//フェーズ1ではuserがジャンルを自分で追加できず決まったジャンルないから選ぶ形にする
type LabelProps = {
	genreKey: GenreKey;
};

const genreMap: Record<GenreKey, { name: string; color: string }> = {
	fruit: { name: "水果", color: "bg-yellow-200" },
	vegetable: { name: "蔬菜", color: "bg-green-200" },
	meat: { name: "肉類", color: "bg-red-300" },
	drink: { name: "飲料", color: "bg-blue-200" },
	seasoning: { name: "調味料", color: "bg-purple-200" },
};

export default function Label({ genreKey }: LabelProps) {
	const genre = genreMap[genreKey];

	return (
		<span
			className={`${genre.color} px-2 py-1,5 rounded-xl border border-black text-xs text-black`}
		>
			{genre.name}
		</span>
	);
}
