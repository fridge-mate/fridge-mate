import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DetailModal from "./DetailModal";
import Button from "@/components/atoms/Button/Button";
import type { GenreKey } from "@/types/genre";

const sampleItem = {
	itemId: "item-3",
	name: "蘋果",
	imageUrl: "/images/items/apple.webp",
	daysLeft: 5,
	category: "fruit" as GenreKey,
	quantity: 3,
	onDetailClick: () => console.log("item-3 clicked"),
};

const DetailModalWithTrigger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button text="詳細を開く" onClick={() => setOpen(true)} />
			<DetailModal
				isOpen={open}
				onClose={() => setOpen(false)}
				item={sampleItem}
			/>
		</>
	);
};

const meta: Meta<typeof DetailModal> = {
	title: "Modals/DetailModal",
	component: DetailModal,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DetailModal>;

export const Default: Story = {
	render: () => <DetailModalWithTrigger />,
};
