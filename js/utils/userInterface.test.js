import { isActivePath } from "./userInterface.js";
import { expect, describe, it } from "vitest";

describe("isActivePath", () => {
    it("returns true when current path matches href exactly", () => {
        const href = "/about";
        const currentPath ="/about";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });

    it(`returns true for root path ("/") when path is "/"`, () => {
        const href = "/";
        const currentPath = "/";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });

    it(`returns true for root path ("/") when path is "/index.html"`, () => {
        const href = "/";
        const currentPath = "/index.html";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });

    it("returns true when current path includes the href", () => {
        const href = "/about";
        const currentPath = "/about/contact.html"
        const result = isActivePath(href, currentPath);
        expect(result).toBe(true);
    });
        it("returns false when paths don't match", () => {
        const href = "/about";
        const currentPath = "/venue";
        const result = isActivePath(href, currentPath);
        expect(result).toBe(false);
    });
});