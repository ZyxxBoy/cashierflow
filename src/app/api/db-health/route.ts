import { getPrisma } from "@/lib/prisma";

export async function GET() {
  try {
    const prisma = getPrisma();

    await prisma.$queryRaw`SELECT 1`;

    // Verify that the application table exists
    await prisma.product.count();

    return Response.json(
      {
        status: "ok",
        database: "connected",
        schema: "ready",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error(
      "Database health check failed:",
      error instanceof Error ? error.name : "UnknownError",
    );

    return Response.json(
      {
        status: "error",
        database: "unavailable",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
