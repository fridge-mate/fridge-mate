import type { Meta, StoryObj } from "@storybook/react";
import CategorySelector from "@/components/layout/Toolbar/atoms/CategorySelector/CategorySelector";

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
		selectedCategory: "all",
	},
};

export const MeatSelected: Story = {
	args: {
		selectedCategory: "meat",
	},
};

export const DrinkSelected: Story = {
	args: {
		selectedCategory: "drink",
	},
};
