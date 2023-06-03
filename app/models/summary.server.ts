import type { Summary } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getSummaries() {
  return prisma.summary.findMany();
}

export async function getSummaryById(id: Summary["id"]) {
  return prisma.summary.findUnique({ where: { id } });
}

export async function getOneSummary(where = {}) {
  return prisma.summary.findFirst({ where });
}
