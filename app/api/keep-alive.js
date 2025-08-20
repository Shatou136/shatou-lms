// pages/api/keep-alive.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    await prisma.$queryRaw`SELECT 1`; // Simple ping to DB
    res.status(200).json({ status: "Database is awake ✅" });
  } catch (error) {
    console.error("Keep-alive failed ❌", error);
    res.status(500).json({ status: "Ping failed ❌" });
  }
}
