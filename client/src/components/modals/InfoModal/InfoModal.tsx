import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import Button from "@/components/atoms/Button";

type InfoModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
};

const InfoModal: React.FC<InfoModalProps> = ({
	isOpen,
	onClose,
	title,
	description,
}) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent
				showCloseButton={false}
				className="max-w-md rounded-xl bg-white"
			>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<DialogFooter className="pt-4">
					<DialogClose asChild>
						<Button text="Close" onClick={onClose} />
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default InfoModal;
