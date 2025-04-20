import { atom } from "jotai";

export type SelectedView = "fridge" | "expired";
export const selectedFridgeAtom = atom<SelectedView>("fridge");
