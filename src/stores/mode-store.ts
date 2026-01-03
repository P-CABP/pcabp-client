import { create } from "zustand";

export type Mode = "ADMIN" | "STORE" | "SHOP" | "DEVELOP";

type ModeStore = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const useModeStore = create<ModeStore>((set) => ({
  mode: "SHOP",
  setMode: (mode) => set({ mode }),
}));

export const useMode = () => useModeStore((store) => store.mode);

export const useModeAction = () => useModeStore((store) => store.setMode);

export default useModeStore;
