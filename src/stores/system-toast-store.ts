import { create } from "zustand";

export type SystemToastMessageType = "info" | "success" | "error";

type SystemToastStore = {
  type: SystemToastMessageType;
  opened: boolean;
  message: string;
  confirm?: boolean;
  open: (props: {
    type: SystemToastMessageType;
    message: string;
    confirm?: boolean;
  }) => void;
  close: () => void;
};

const useSystemToastStore = create<SystemToastStore>((set) => ({
  type: "info",
  opened: false,
  duration: 3000,
  message: "",
  confirm: false,
  open: ({ type, message, confirm = type === "error" ? true : false }) =>
    set({
      type,
      opened: true,
      message,
      confirm,
    }),
  close: () =>
    set({
      opened: false,
    }),
}));

export const useToast = () => useSystemToastStore((store) => store.open);

export default useSystemToastStore;
