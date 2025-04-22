import { atom } from "jotai";
import type { GenreSelectorKey } from "@/types/genre";

export const selectedCategoryAtom = atom<GenreSelectorKey>("all");
