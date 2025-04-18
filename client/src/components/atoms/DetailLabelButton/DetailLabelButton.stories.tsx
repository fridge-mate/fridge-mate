import DetailLabelButton from "@/components/atoms/DetailLabelButton/DetailLabelButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DetailLabelButton> = {
	component: DetailLabelButton,
	title: "Atoms/DetailLabelButton",
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DetailLabelButton>;

export const Default: Story = {};
