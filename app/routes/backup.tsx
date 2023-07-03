import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import MenuItem from "~/components/molecules/menu-item";
import { prisma } from "~/db.server";
import backup from "~/models/backup.server";

const filePath = `${process.cwd()}/public/peacock_backup.json`;

export const action = async ({ request }: ActionArgs) =>
  backup(prisma, filePath);

export const loader = async () => redirect("/");
