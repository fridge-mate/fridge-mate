import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DetailModal from "./DetailModal";
import Button from "@/components/atoms/Button/Button";
import type { GenreKey } from "@/types/genre";

// サンプルアイテムデータ
const sampleItem = {
	itemId: "item-3",
	name: "蘋果",
	imageUrl: "/images/items/apple.webp",
	daysLeft: 5,
	category: "fruit" as GenreKey,
	quantity: 3,
	onDetailClick: () => console.log("item-3 clicked"),
};

// モーダルを開くボタン付き Story コンポーネント
const DetailModalWithTrigger = () => {
	const [open, setOpen] = useState(false);

	// 成功／失敗ハンドラのモック
	const handleSuccess = () => {
		console.log("削除成功");
		setOpen(false);
	};

	const handleError = () => {
		console.log("削除失敗");
	};

	return (
		<>
			<Button text="詳細を開く" onClick={() => setOpen(true)} />
			<DetailModal
				isOpen={open}
				onClose={() => setOpen(false)}
				item={sampleItem}
				onDeleteSuccess={handleSuccess}
				onDeleteError={handleError}
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
