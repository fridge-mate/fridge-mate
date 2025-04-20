import type { Meta, StoryObj } from "@storybook/react";
import FridgeSelector from "@/components/layout/Header/atoms/FridgeSelector/FridgeSelector";

const meta: Meta<typeof FridgeSelector> = {
	title: "layout/header/FridgeSelector",
	component: FridgeSelector,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FridgeSelector>;

export const Default: Story = {
	args: {
		selectedFridge: "fridge",
	},
};

export const ExpiredSelected: Story = {
	args: {
		selectedFridge: "expired",
	},
};
