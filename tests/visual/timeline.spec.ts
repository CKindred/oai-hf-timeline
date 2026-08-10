import { expect, test } from "@playwright/test";

test.describe("timeline visual regression", () => {
  test("initial load - desktop", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page).toHaveScreenshot("timeline-desktop.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("expanded - desktop", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Expand all" }).click();
    await expect(page).toHaveScreenshot("timeline-expanded.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("initial load - mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page).toHaveScreenshot("timeline-mobile.png", {
      fullPage: true,
      animations: "disabled",
    });
  });
});
