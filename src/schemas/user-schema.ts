import { z } from "zod";

import { requiredValueMessage } from "@/utils/locale-utils";

const loginSchema = z.object({
  username: z.string().min(1, requiredValueMessage("user.label.USERNAME")),
  password: z.string().min(1, requiredValueMessage("user.label.PASSWORD")),
});

type LoginSchema = z.infer<typeof loginSchema>;

export { loginSchema, type LoginSchema };
