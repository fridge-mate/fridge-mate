type QuantityBadgeProps = {
	count: number;
};

function QuantityBadge({ count }: QuantityBadgeProps) {
	return (
		<div className="flex items-center space-x-1">
			<button type="button">▲</button>
			<span className="text-black text-base font-semibold px-2 py-1">
				Quantity: {count}
			</span>
			<button type="button">▼</button>
		</div>
	);
}

export default QuantityBadge;
