import { getHealthStatus } from "@/server/services/health.service";

export async function GET() {
  return Response.json(getHealthStatus(), {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
