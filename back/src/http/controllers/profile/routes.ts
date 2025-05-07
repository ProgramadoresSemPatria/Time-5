import type { FastifyInstance } from "fastify";
import { updateProfile } from "./update";

export async function profileRoutes(app: FastifyInstance) {
  app.put("/profile", updateProfile);
}
