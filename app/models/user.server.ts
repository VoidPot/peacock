import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getMembers() {
  return prisma.user.findMany({ where: { type: "MEMBER" } });
}

export async function getVendors() {
  return prisma.user.findMany({ where: { type: "VENDOR" } });
}

export async function getMembersCount() {
  return prisma.user.count({ where: { type: "MEMBER" } });
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}
