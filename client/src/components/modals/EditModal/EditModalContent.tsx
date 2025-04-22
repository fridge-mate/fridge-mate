import {
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import Button from "@/components/atoms/Button/Button";

const EditModalContent = ({ onClose }: { onClose: () => void }) => {
	return (
		<>
			<DialogHeader>
				<DialogTitle className="text-center text-xl font-bold py-5">
					Edit
				</DialogTitle>
			</DialogHeader>

			<div>
				<Button
					text="通知タイミング変更"
					onClick={() => console.log("通知タイミング変更")}
					className="w-full flex items-center justify-center gap-2 rounded-none border-l-0 border-r-0 py-5"
				/>
				<Button
					text="複数選択"
					onClick={() => console.log("複数選択")}
					className="w-full flex items-center justify-center gap-2 rounded-none border-t-0 border-l-0 border-r-0 py-5"
				/>
			</div>

			<DialogFooter>
				<DialogClose asChild>
					<Button
						text="Close"
						onClick={onClose}
						className="w-full rounded-none border-l-0 border-r-0 border-t-0 py-5"
					/>
				</DialogClose>
			</DialogFooter>
		</>
	);
};

export default EditModalContent;
