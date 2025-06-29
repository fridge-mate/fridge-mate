import {
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import Button from "@/components/atoms/Button/Button";

type SelectModalProps = {
	onClose: () => void;
	title: string;
	actions: { name: string; fn: () => void }[];
};

//複数の選択肢とacrionを持ったModalのcomp_使用例（Header Edit）
const SelectModal = ({ onClose, title, actions }: SelectModalProps) => {
	return (
		<>
			<DialogHeader>
				<DialogTitle className="text-center text-xl font-bold py-5">
					{title}
				</DialogTitle>
			</DialogHeader>

			<div>
				{actions.map((action) => {
					return (
						<Button
							key={action.name}
							text={action.name}
							onClick={() => action.fn()}
							className="w-full flex items-center justify-center gap-2 rounded-none border-l-0 border-r-0 py-5"
						/>
					);
				})}
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

export default SelectModal;
