import type { Meta, StoryObj } from "@storybook/react";
import ItemCard from "@/features/items/components/ItemCard/ItemCard";

const meta: Meta<typeof ItemCard> = {
	component: ItemCard,
	title: "features/items/ItemCard",
	tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ItemCard>;

export const Apple: Story = {
	args: {
		name: "Apple",
		imageUrl: "/images/items/apple.webp",
		daysLeft: -2,
		category: "fruit",
		quantity: 1,
	},
};

export const Carrot: Story = {
	args: {
		name: "Carrot",
		imageUrl: "/images/items/carrot.webp",
		daysLeft: 3,
		category: "vegetable",
		quantity: 2,
	},
};
