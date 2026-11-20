import { test, expect } from "@playwright/test";

test.describe("CashierFlow Application", () => {
  test("should render the application landing page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/CashierFlow/);

    await expect(
      page.getByRole("heading", {
        name: "Modern retail management, simplified.",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("should display the development status", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Development Status",
        exact: true,
      }),
    ).toBeVisible();
  });

  test("should return a healthy API response", async ({ request }) => {
    const response = await request.get("/api/health");

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual({
      status: "ok",
      service: "CashierFlow",
      version: expect.any(String),
    });
  });

  test("should navigate to the health endpoint", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", {
        name: "Check API Status",
      })
      .click();

    await expect(page).toHaveURL(/\/api\/health$/);
  });
});
