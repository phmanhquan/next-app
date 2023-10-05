import { z } from "zod";

const schema = z.object({
  password: z.string().min(5),
  email: z.string().email(),
});

export default schema;
