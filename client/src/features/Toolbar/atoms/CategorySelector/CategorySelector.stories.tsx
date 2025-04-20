import type { Meta, StoryObj } from "@storybook/react";
import CategorySelector from "@/features/Toolbar/atoms/CategorySelector/CategorySelector";
import type { GenreKey } from "@/types/genre";

const meta: Meta<typeof CategorySelector> = {
	title: "Molecules/Toolbar/ToolbarAtoms/CategorySelector",
	component: CategorySelector,
	tags: ["autodocs"],
};

export default meta;

// 型エイリアス
type Story = StoryObj<typeof CategorySelector>;

export const Default: Story = {
	args: {
		selectedCategory: "fruit",
		onChange: (val: GenreKey) => {
			console.log("Selected:", val);
		},
	},
};

export const MeatSelected: Story = {
	args: {
		selectedCategory: "meat",
		onChange: (val: GenreKey) => {
			console.log("Selected:", val);
		},
	},
};

export const DrinkSelected: Story = {
	args: {
		selectedCategory: "drink",
		onChange: (val: GenreKey) => {
			console.log("Selected:", val);
		},
	},
};
