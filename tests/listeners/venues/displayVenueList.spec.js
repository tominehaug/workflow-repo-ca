import { test, expect } from "@playwright/test";

test("user can navigate from login page, via home page, to venue details page", async ({
  page,
}) => {
  await page.goto("/login");

  await page.getByRole("link", { name: "Home" }).click();

  const firstVenue = page.locator("#venue-container a").first();

  await expect(firstVenue).toBeVisible();

  await firstVenue.click();

  await expect(page.getByRole("heading")).toContainText("Venue details");
});
