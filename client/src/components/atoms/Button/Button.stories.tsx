import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "Atoms/Button",
	component: Button,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		text: "Default",
		onClick: () => alert("Default clicked"),
		className: "",
	},
};

export const Category: Story = {
	args: {
		text: "分類",
		onClick: () => alert("分類篩選"),
		className: "border border-black rounded-full bg-white text-black px-6 py-2",
	},
};

export const Sort: Story = {
	args: {
		text: "排序",
		onClick: () => alert("進行排序"),
		className: "border border-black rounded-full bg-white text-black px-6 py-2",
	},
};

export const ClearExpired: Story = {
	args: {
		text: "清除過期項目",
		onClick: () => alert("已刪除過期項目！"),
		className:
			"bg-red-200 text-black border border-red-300 px-4 py-2 rounded-md",
	},
};
