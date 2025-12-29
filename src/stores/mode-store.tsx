import { create } from "zustand";

type Mode = "ADMIN" | "FRANCHISE" | "STORE" | "DEVELOP";

type ModeStore = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

const useModeStore = create<ModeStore>((set) => ({
  mode: "STORE",
  setMode: (mode) => set({ mode }),
}));

export const useMode = () => useModeStore((store) => store.mode);

export const useModeAction = () => useModeStore((store) => store.setMode);

export default useModeStore;
