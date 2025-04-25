import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Button from "@/components/atoms/Button/Button";
import EditModalContent from "@/components/modals/EditModal";

// ラッパーコンポーネント（Dialogを開閉可能に）
const EditModalWithDialog = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button text="Open Edit Modal" onClick={() => setOpen(true)} />
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="bg-white rounded-lg p-0 gap-0">
					<EditModalContent onClose={() => setOpen(false)} />
				</DialogContent>
			</Dialog>
		</>
	);
};

const meta: Meta<typeof EditModalContent> = {
	title: "Modals/EditModalContent",
	component: EditModalContent,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EditModalContent>;

export const Default: Story = {
	render: () => <EditModalWithDialog />,
};
