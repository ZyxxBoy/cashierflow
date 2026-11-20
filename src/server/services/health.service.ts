import { appConfig } from "@/config/app";

export function getHealthStatus() {
  return {
    status: "ok",
    service: appConfig.name,
    version: appConfig.version,
  } as const;
}
