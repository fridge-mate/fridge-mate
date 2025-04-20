import { atom } from "jotai";
import type { GenreKey } from "@/types/genre";

export const selectedCategoryAtom = atom<GenreKey>("all");
