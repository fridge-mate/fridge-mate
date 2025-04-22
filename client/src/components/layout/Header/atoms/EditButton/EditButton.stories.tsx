import type { Meta, StoryObj } from "@storybook/react";
import EditButton from "./EditButton";

const meta: Meta<typeof EditButton> = {
	title: "layout/header/EditButton",
	component: EditButton,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditButton>;

export const Default: Story = {
	args: {},
};
