import { describe, expect, it } from "vitest";

import { appConfig } from "@/config/app";
import { getHealthStatus } from "@/server/services/health.service";

describe("Health Service", () => {
  it("should return a healthy application status", () => {
    const result = getHealthStatus();

    expect(result.status).toBe("ok");
  });

  it("should return the correct service name", () => {
    const result = getHealthStatus();

    expect(result.service).toBe(appConfig.name);
  });

  it("should return the current application version", () => {
    const result = getHealthStatus();

    expect(result.version).toBe(appConfig.version);
  });

  it("should not expose unexpected fields", () => {
    const result = getHealthStatus();

    expect(result).toEqual({
      status: "ok",
      service: appConfig.name,
      version: appConfig.version,
    });
  });
});
