import { useState } from "react";
import EditButton from "@/components/layout/Header/atoms/EditButton/EditButton";
import FridgeSelector from "@/components/layout/Header/atoms/FridgeSelector/FridgeSelector";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SelectModal from "@/components/modals/SelectModal";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = (isOpened: boolean) => setIsModalOpen(isOpened);
	const selectModalProps = {
		title: "Edit",
		actions: [
			{
				name: "變更通知時間",
				fn: () => console.log("變更通知時間"),
			},
			{
				name: "多項選擇",
				fn: () => console.log("多項選擇"),
			},
		],
	};

	return (
		<header>
			<div className="flex items-center justify-between px-4 py-2 border-b">
				<FridgeSelector />
				<EditButton onClick={() => toggleModal(true)} />
			</div>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent
					showCloseButton={false}
					className="bg-white rounded-xl p-0 gap-0 top-[80%] transition-none w-[95%]"
				>
					<SelectModal
						onClose={() => toggleModal(false)}
						title={selectModalProps.title}
						actions={selectModalProps.actions}
					/>
				</DialogContent>
			</Dialog>
		</header>
	);
};

export default Header;
