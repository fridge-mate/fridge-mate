import type { Meta, StoryObj } from "@storybook/react";
import Itemlist from "./Itemlist";

const meta: Meta<typeof Itemlist> = {
	title: "Features/Items/Itemlist",
	component: Itemlist,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Itemlist>;

export const Default: Story = {
	render: () => <Itemlist />,
};
