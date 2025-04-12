<<<<<<< HEAD
import type { Meta, StoryObj } from "@storybook/react";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";

const meta: Meta<typeof QuantityBadge> = {
	title: "Atoms/QuantityBadge",
	component: QuantityBadge,
	tags: ["autodocs"],
};
=======
import { Meta,StoryObj } from "@storybook/react";
import QuantityBadge from "@/components/atoms/QuantityBadge/QuantityBadge";

const meta:Meta<typeof QuantityBadge>={
  title:'Atoms/QuantityBadge',
  component:QuantityBadge,
  tags:["autodocs"]
}
>>>>>>> dab80a7 (feat(ui): add QuantityBadge component and refine Label design)
export default meta;

type Story = StoryObj<typeof QuantityBadge>;

<<<<<<< HEAD
export const Default: Story = {
	args: {
		count: 3,
	},
};
=======
export const  Default:Story={
  args:{
    count:3
  }
}
>>>>>>> dab80a7 (feat(ui): add QuantityBadge component and refine Label design)
