import type { Meta, StoryObj } from "@storybook/react";
import FridgeSelector from "@/components/molecules/Header/headerAtoms/FridgeSelector/FridgeSelector";
import type { SelectedView } from "@/components/molecules/Header/headerAtoms/FridgeSelector/FridgeSelector";

const meta: Meta<typeof FridgeSelector> = {
	title: "Modules/Header/headerAtoms/FridgeSelector",
	component: FridgeSelector,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FridgeSelector>;

export const Default: Story = {
	args: {
		selectedFridge: "fridge",
		onChange: (val: SelectedView) => {
			console.log("Selected:", val);
		},
	},
};

export const ExpiredSelected: Story = {
	args: {
		selectedFridge: "expired",
		onChange: (val: SelectedView) => {
			console.log("Selected:", val);
		},
	},
};
