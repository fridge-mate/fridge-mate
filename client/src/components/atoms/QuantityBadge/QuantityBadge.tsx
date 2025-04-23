type QuantityBadgeProps = {
	count: number;
	size?: "sm" | "md" | "lg";
};

function QuantityBadge({ count, size = "md" }: QuantityBadgeProps) {
	const iconSize = {
		sm: "size-4",
		md: "size-7",
		lg: "size-8",
	}[size];

	const textSize = {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base",
	}[size];

	return (
		<div className="flex items-center">
			<button type="button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={iconSize}
				>
					<title id="icon-title">Plus Icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</button>

			<span className={`text-black ${textSize} font-semibold px-2 py-1`}>
				Quantity: {count}
			</span>

			<button type="button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={iconSize}
				>
					<title id="icon-title">Minus Icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default QuantityBadge;
