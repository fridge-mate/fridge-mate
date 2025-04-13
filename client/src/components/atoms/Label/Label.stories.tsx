import type { Meta, StoryObj } from "@storybook/react";
import Label from "@/components/atoms/Label/Label";

const meta: Meta<typeof Label> = {
	title: "Atom/Label",
	component: Label,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Fruit: Story = {
	args: {
		genreKey: "fruit",
	},
};

export const Meat: Story = {
	args: {
		genreKey: "meat",
	},
};

export const Drink: Story = {
	args: {
		genreKey: "drink",
	},
};
