import { useState } from "react";
import EditButton from "@/components/layout/Header/atoms/EditButton/EditButton";
import FridgeSelector from "@/components/layout/Header/atoms/FridgeSelector/FridgeSelector";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EditModalContent from "@/components/modals/EditModal/EditModalContent";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<header>
			<div className="flex items-center justify-between px-4 py-2 border-b">
				<FridgeSelector />
				<EditButton onClick={() => setIsModalOpen(true)} />
			</div>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent
					showCloseButton={false}
					className="bg-white rounded-xl p-0 gap-0 top-[80%] transition-none w-[95%]"
				>
					<EditModalContent onClose={() => setIsModalOpen(false)} />
				</DialogContent>
			</Dialog>
		</header>
	);
};

export default Header;
