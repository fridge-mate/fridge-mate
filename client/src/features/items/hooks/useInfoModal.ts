import { useState } from "react";

export type InfoModalType = "deleteSuccess" | "deleteError";

const infoModalMessages: Record<
	InfoModalType,
	{ title: string; description: string }
> = {
	deleteSuccess: {
		title: "刪除成功",
		description: "已成功刪除項目。",
	},
	deleteError: {
		title: "刪除失敗",
		description: "請再試一次。",
	},
};

export const useInfoModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState({ title: "", description: "" });

	const showModal = (type: InfoModalType) => {
		const { title, description } = infoModalMessages[type];
		setContent({ title, description });
		setIsOpen(true);
	};

	const closeModal = () => setIsOpen(false);

	return {
		isOpen,
		content,
		showModal,
		closeModal,
	};
};
