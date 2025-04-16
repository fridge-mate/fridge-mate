import DetailLabelWithButton from "@/components/atoms/DetailLabelWithButton/DetailLabelWithButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DetailLabelWithButton> = {
	component: DetailLabelWithButton,
	title: "Atoms/DetailLabelWithButton",
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DetailLabelWithButton>;

export const Default: Story = {};
