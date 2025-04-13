import ExpirationBadge from "@/components/atoms/ExpirationBadge/ExpirationBadge";
import Label from "@/components/atoms/Label/Label";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";
type ItemCardProps = {
	name: string;
	imageUrl: string; //stringでそのままpathをもらう設計でいいのか再検討
	daysLeft: number;
	category: string;
	quantity: number;
	onDetailClick?: () => void;
};

const ItemCard: React.FC<ItemCardProps> = ({
	name,
	imageUrl,
	daysLeft,
	category,
	quantity,
	onDetailClick,
}) => {
	return (
		<div
			className={`flex justify-between p-5 ${daysLeft < 0 ? "bg-red-100" : "bg-white"}`}
		>
			<div className="flex space-x-3">
				<img src={`${imageUrl}`} alt="product" className="w-16 h-16" />
				<div className="">
					<ExpirationBadge daysLeft={daysLeft} />
					<div className="flex space-x-3 items-center">
						<p>{name}</p>
						<Label genreKey={category} />
					</div>
				</div>
			</div>
			<QuantityBadge count={quantity} />
		</div>
	);
};

export default ItemCard;
