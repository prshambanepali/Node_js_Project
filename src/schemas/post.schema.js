import { z } from "zod";
export const createPostSchema = z.object({
  content: z.string().max(50, "Too long text"),
});
export const updatePostSchema = z.object({
  content: z.string().max(50, "Too long text").nullable().nullish(),
  likeFlag: z.boolean().default(false),
});
