import type { Meta, StoryObj } from "@storybook/react";
import InfoModal from "./InfoModal";
import { useState } from "react";

const meta: Meta<typeof InfoModal> = {
	title: "Modals/InfoModal",
	component: InfoModal,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoModal>;

export const Default: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(true);

		return (
			<InfoModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="刪除完成"
				description="項目已成功刪除。"
			/>
		);
	},
};
