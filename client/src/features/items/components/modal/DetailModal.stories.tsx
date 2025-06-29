import type { Meta, StoryObj } from "@storybook/react";
import DetailModal from "./DetailModal";
import type { GenreKey } from "@/types/genre";

const sampleItem = {
	itemId: "item-3",
	name: "蘋果",
	imageUrl: "/images/items/apple.webp",
	daysLeft: 5,
	category: "fruit" as GenreKey,
	quantity: 3,
	onDetailClick: () => {},
};

const meta: Meta<typeof DetailModal> = {
	title: "Modals/DetailModal",
	component: DetailModal,
	tags: ["autodocs"],
	args: {
		isOpen: true,
		item: sampleItem,
		onClose: () => console.log("Closed"),
		onDeleteSuccess: () => console.log("Deleted"),
		onDeleteError: () => console.log("Delete failed"),
	},
};

export default meta;

type Story = StoryObj<typeof DetailModal>;

export const Default: Story = {};
