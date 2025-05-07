import { clsx } from "clsx";
import ExpirationBadge from "@/components/atoms/ExpirationBadge/ExpirationBadge";
import Label from "@/components/atoms/Label/Label";
import type { GenreKey } from "@/types/genre";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";
import DetailLabelButton from "@/features/items/components/ItemCard/atoms/DetailLabelButton/DetailLabelButton";

export type ItemCardProps = {
	itemId: string; //管理方法をstinrgかnumberか検討する
	name: string;
	imageUrl: string; //stringでそのままpathをもらう設計でいいのか再検討
	daysLeft: number;
	category: GenreKey;
	quantity: number;
	onDetailClick: () => void;
};

const ItemCard: React.FC<ItemCardProps & { className?: string }> = ({
	itemId,
	name,
	imageUrl,
	daysLeft,
	category,
	quantity,
	onDetailClick,
	className, //itemList内で複数のcard表示時にborderが重ならないように複数個目にはborder-tをnoneに
}) => {
	return (
		<div
			className={clsx(
				"flex justify-between p-2 border border-black",
				daysLeft < 0 ? "bg-expired-light" : "bg-white",
				className,
			)}
		>
			<div className="flex space-x-3">
				<img src={`${imageUrl}`} alt="product" className="w-11 h-11" />
				<div>
					<ExpirationBadge daysLeft={daysLeft} />
					<div className="flex space-x-3 items-center">
						<p className="text-xs">{name}</p>
						<Label genreKey={category} />
					</div>
				</div>
			</div>
			<div className="flex gap-x-2">
				<QuantityBadge count={quantity} />
				<DetailLabelButton itemId={itemId} onClick={onDetailClick} />
			</div>
		</div>
	);
};

export default ItemCard;
