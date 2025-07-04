import type { Meta, StoryObj } from "@storybook/react";
import CategorySelector from "@/components/atoms/CategorySelector";

const meta: Meta<typeof CategorySelector> = {
	title: "layout/Toolbar/CategorySelector",
	component: CategorySelector,
	tags: ["autodocs"],
};

export default meta;

// 型エイリアス
type Story = StoryObj<typeof CategorySelector>;

export const Default: Story = {
	args: {
		state: "all",
	},
};

export const MeatSelected: Story = {
	args: {
		state: "meat",
	},
};

export const DrinkSelected: Story = {
	args: {
		state: "drink",
	},
};
