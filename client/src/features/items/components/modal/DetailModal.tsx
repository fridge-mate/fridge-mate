import {
	Dialog,
	DialogContent,
	// DialogHeader,
	// DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import Button from "@/components/atoms/Button";
import type { ItemCardProps } from "@/features/items/components/ItemCard/ItemCard";
import ExpirationBadge from "@/components/atoms/ExpirationBadge";
import QuantityBadge from "@/components/atoms/QuantityBadge";
import Label from "@/components/atoms/Label";
import { useExpirationDate } from "@/features/items/hooks/useExpirationDate";

type DetailModalProps = {
	isOpen: boolean;
	onClose: () => void;
	item: ItemCardProps;
};
// {itemId: 'item-1', name: '胡蘿蔔', imageUrl: '/images/items/carrot.webp', daysLeft: 3, category: 'vegetable', …}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, item }) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent
				className="bg-white p-0 rounded-xl w-[90%]"
				showCloseButton={false}
			>
				<div className="p-4">
					<div className="flex py-3">
						<div className="w-1/2 h-auto flex justify-start ml-2">
							<img
								src={item.imageUrl}
								alt="item"
								className="w-[100px] h-[100px] border border-black"
							/>
						</div>
						<div className="w-1/2 p-3 flex flex-col  items-center justify-around py-3">
							<Label genreKey={item.category} className="text-base px-4" />
							<h2 className=" text-2xl">{item.name}</h2>
						</div>
					</div>
					<div className="border border-black rounded-xl">
						<div className="py-3 px-6">
							<p>賞味期限</p>
							<div className="flex items-center justify-between">
								<p>{useExpirationDate(item.daysLeft)}</p>
								<ExpirationBadge
									daysLeft={item.daysLeft}
									className=" text-base"
								/>
							</div>
						</div>
						<div className="flex justify-between border-t border-black py-3 px-6">
							<p>數量</p>
							<QuantityBadge count={item.quantity} size="md" />
						</div>
						<div className="flex flex-col gap-2 border-t border-b border-black py-3 px-6">
							<p>Memo</p>
							<textarea
								placeholder="請輸入"
								className="w-full h-10 border border-black placeholder-gray-400 text-sm text-center leading-9"
							/>
						</div>

						<div className="flex justify-around p-3">
							<Button text="SAVE" onClick={() => console.log("Save")} />
							<Button text="DELETE" onClick={() => console.log("Delete")} />
						</div>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							text="Close"
							onClick={onClose}
							className="w-full rounded-none border-b-0 border-l-0 border-r-0 border-t py-3"
						/>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DetailModal;
