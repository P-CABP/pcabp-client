import { create } from "zustand";

export type SystemModalMessageType = "info" | "success" | "error" | "confirm";

type SystemModalStore = {
  type: SystemModalMessageType;
  opened: boolean;
  message: string;
  confirm: (props: { message: string; onConfirm: () => void }) => void;
  alert: (props: { type: SystemModalMessageType; message: string }) => void;
  close: () => void;
  onConfirm?: () => void;
};

const useSystemModalStore = create<SystemModalStore>((set) => ({
  type: "info",
  opened: false,
  message: "",
  confirm: ({ message, onConfirm }) =>
    set({
      type: "confirm",
      opened: true,
      message,
      onConfirm,
    }),
  alert: ({ type, message }) =>
    set({
      type,
      opened: true,
      message,
    }),
  close: () =>
    set({
      opened: false,
    }),
}));

export const useConfirm = () => useSystemModalStore((store) => store.confirm);

export const useAlert = () => useSystemModalStore((store) => store.alert);

export default useSystemModalStore;
