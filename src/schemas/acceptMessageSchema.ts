import { z } from "zod";

export const acceptMessageSchema = z.object({
  messages: z.boolean(),
});
