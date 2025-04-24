import { atom } from "jotai";
import { selectedCategoryAtom } from "@/store/category";

export type SelectedView = "fridge" | "expired";
export const selectedFridgeAtom = atom<SelectedView>("fridge");

//冷蔵庫の種類を変更すると選択されているカテゴリもデフォルトに戻す。
export const setFridgeViewAtom = atom(
	null,
	(_get, set, newView: SelectedView) => {
		set(selectedFridgeAtom, newView);
		set(selectedCategoryAtom, "all");
	},
);
