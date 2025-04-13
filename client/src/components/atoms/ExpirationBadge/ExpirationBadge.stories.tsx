import type { Meta, StoryObj } from "@storybook/react";
import ExpirationBadge from "@/components/atoms/ExpirationBadge/ExpirationBadge";

const meta: Meta<typeof ExpirationBadge> = {
	component: ExpirationBadge,
	title: "Atoms/ExpirationBadge",
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExpirationBadge>;

export const Expired: Story = { args: { daysLeft: -1 } };
export const Today: Story = { args: { daysLeft: 0 } };
export const Soon: Story = { args: { daysLeft: 1 } };
export const Normal: Story = { args: { daysLeft: 5 } };
