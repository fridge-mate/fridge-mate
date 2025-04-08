// src/components/atoms/Label/Label.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Fruit: Story = {
  args: {
    text: '果物',
    color: 'bg-yellow-200',
  },
};

export const Meat: Story = {
  args: {
    text: '肉',
    color: 'bg-red-300',
    textColor: 'text-white',
  },
};

export const Vegetable: Story = {
  args: {
    text: '野菜',
    color: 'bg-green-200',
  },
};
