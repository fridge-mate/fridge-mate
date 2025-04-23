import { clsx } from "clsx";
import ExpirationBadge from "@/components/atoms/ExpirationBadge/ExpirationBadge";
import Label from "@/components/atoms/Label/Label";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";
import DetailLabelButton from "./atoms/DetailLabelButton/DetailLabelButton";
import type { GenreKey } from "@/types/genre";

export type ItemCardProps = {
	itemId: string;
	name: string;
	imageUrl: string;
	daysLeft: number;
	category: GenreKey;
	quantity: number;
	onDetailClick: () => void;
	className?: string;
};

const ItemCard: React.FC<ItemCardProps> = ({
	itemId,
	name,
	imageUrl,
	daysLeft,
	category,
	quantity,
	onDetailClick,
	className,
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
				<img src={imageUrl} alt="product" className="w-11 h-11" />
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
				<DetailLabelButton onClick={onDetailClick} />
			</div>
		</div>
	);
};

export default ItemCard;
