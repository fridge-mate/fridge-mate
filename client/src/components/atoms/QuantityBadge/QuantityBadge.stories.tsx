import type { Meta, StoryObj } from "@storybook/react";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";

const meta: Meta<typeof QuantityBadge> = {
	title: "Atoms/QuantityBadge",
	component: QuantityBadge,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QuantityBadge>;

export const  Default:Story={
  args:{
    count:3
  }
}
