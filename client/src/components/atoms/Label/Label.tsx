//商品ジャンルを受けとりそこからtext（ex.野菜）とtheme color（ex.green）を表示する様にする

//フェーズ1ではuserがジャンルを自分で追加できず決まったジャンルないから選ぶ形にする
type GenreKey = 'fruit' | 'vegetable' | 'meat' | 'drink' | 'seasoning';

type LabelProps = {
  genreKey: GenreKey;
};

const genreMap: Record<GenreKey, { name: string; color: string }> = {
  fruit: { name: 'Fruit', color: 'bg-yellow-200' },
  vegetable: { name: 'Vegetable', color: 'bg-green-200' },
  meat: { name: 'Meat', color: 'bg-red-300' },
  drink: { name: 'Drink', color: 'bg-blue-200' },
  seasoning: { name: 'Seasoning', color: 'bg-purple-200' },
};

export default function Label({ genreKey }: LabelProps) {
  const genre = genreMap[genreKey];

  return (
    <span className={`${genre.color} px-2 py-1 rounded-lg border border-black text-sm text-black`}>
      {genre.name}
    </span>
  );
}

