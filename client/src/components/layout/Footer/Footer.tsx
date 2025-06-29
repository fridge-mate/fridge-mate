import Button from "@/components/atoms/Button/Button";
import SelectModal from "@/components/modals/SelectModal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const Footer = () => {
	const selectModalProps = {
		title: "新增商品",
		actions: [
			{
				name: "手動輸入",
				fn: () => console.log("手動輸入"),
			},
			{
				name: "條碼輸入",
				fn: () => console.log("條碼輸入"),
			},
			{
				name: "從照片新增",
				fn: () => console.log("從照片新增"),
			},
		],
	};
	const [serchIsModalOpen, setSerchIsModalOpen] = useState(false);
	return (
		<footer className="flex justify-around p-4 border border-black">
			<Button text="HOME" onClick={() => console.log("clicked")} />

			{/* ------AddItem BTN & AddItem Modal--------------------- */}
			<Button
				text="ADD ITEMS"
				onClick={() => setSerchIsModalOpen(!serchIsModalOpen)}
			/>
			<Dialog open={serchIsModalOpen} onOpenChange={setSerchIsModalOpen}>
				<DialogContent
					showCloseButton={false}
					className="bg-white rounded-xl p-0 gap-0 top-[80%] transition-none w-[95%]"
				>
					<SelectModal
						onClose={() => setSerchIsModalOpen(!serchIsModalOpen)}
						title={selectModalProps.title}
						actions={selectModalProps.actions}
					/>
				</DialogContent>
			</Dialog>
			{/* ------SETTING  & SETTING Modal--------------------- */}
			<Button text="SETTING" onClick={() => console.log("clicked")} />
		</footer>
	);
};

export default Footer;
