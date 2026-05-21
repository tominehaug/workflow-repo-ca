import { getUsername } from "./storage";
import { expect, describe, it, beforeEach } from "vitest";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getUsername", () => {
    it("retrieves username from storage", () => {
      const user = {
        name: "john",
        age: "24",
      };
      localStorage.setItem("user", JSON.stringify(user));
      const username = getUsername();
      expect(username).toBe("john");
    });

    it("returns null when no user exists in storage", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
