type DetailLabelButtonProps = {
	itemId: string;
	onClick: (id: string) => void;
};
//追加：親要素からdetailModalのopenのstate,itemId,onclockを受け取りopenをtoggleさせる
const DetailLabelButton: React.FC<DetailLabelButtonProps> = ({
	itemId,
	onClick,
}) => {
	return (
		<button
			type="button"
			className="flex items-center space-x-2 text-lg"
			onClick={() => onClick(itemId)}
		>
			{/* heroicon url:https://heroicons.com/ iconName:adjustments-horizontal */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-7 h-7"
				role="img"
				aria-labelledby="icon-title"
			>
				<title id="icon-title">詳細アイコン</title>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
				/>
			</svg>
		</button>
	);
};

export default DetailLabelButton;
