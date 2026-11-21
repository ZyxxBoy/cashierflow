import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();

    await prisma.$queryRaw`SELECT 1`;
    await prisma.product.count();

    return Response.json({
      status: "ok",
      database: "connected",
      schema: "ready",
    });
  } catch (error) {
    console.error("Database health check failed", error);

    return Response.json(
      {
        status: "error",
        database: "unavailable",
      },
      { status: 503 },
    );
  }
}
