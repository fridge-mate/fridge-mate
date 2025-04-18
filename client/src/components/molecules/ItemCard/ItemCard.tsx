import ExpirationBadge from "@/components/atoms/ExpirationBadge/ExpirationBadge";
import Label from "@/components/atoms/Label/Label";
import type { GenreKey } from "@/components/atoms/Label/Label";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";
import DetailLabelButton from "@/components/atoms/DetailLabelWithButton/DetailLabelButton";
type ItemCardProps = {
	itemId: string; //管理方法をstinrgかnumberか検討する
	name: string;
	imageUrl: string; //stringでそのままpathをもらう設計でいいのか再検討
	daysLeft: number;
	category: GenreKey;
	quantity: number;
	onDetailClick: () => void;
};

const ItemCard: React.FC<ItemCardProps> = ({
	itemId,
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
				<div>
					<ExpirationBadge daysLeft={daysLeft} />
					<div className="flex space-x-3 items-center">
						<p>{name}</p>
						<Label genreKey={category} />
					</div>
				</div>
			</div>
			<div className="flex space-x-5">
				<QuantityBadge count={quantity} />
				<DetailLabelButton itemId={itemId} onClick={onDetailClick} />
			</div>
		</div>
	);
};

export default ItemCard;
