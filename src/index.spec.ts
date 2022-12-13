import "mocha";
import { assert } from "chai";

import npmPackage, { f } from "./index";

describe("NPM Package", () => {
  it("should be an object", () => {
    assert.isObject(npmPackage);
  });

  it("should have a f function", () => {
    assert.property(npmPackage, "f");
  });
});

describe("f", () => {
  it("is function", () => {
    assert.isFunction(f);
  });

  it("should be noop with no args", () => {
    const actual = f`Hello World`;
    const expected = `Hello World`;
    assert.equal(actual, expected);
  });

  it("should format string with inject arguments", () => {
    const hello = `Hello`;
    const world = `World`;
    const actual = f`${hello} ${world}`;
    const expected = `Hello World`;
    assert.equal(actual, expected);
  });

  it("should default to empty string for falsy values", () => {
    const hello = `Hello`;
    const world = null;
    const actual = f`${hello} ${world}`;
    const expected = ``;
    assert.equal(actual, expected);
  });

  it("should resolve to injected fallback for falsy values", () => {
    const hello = `Hello`;
    const world = ``;
    const fallback = `fallback`;
    const actual = f(fallback)`${hello} ${world}`;
    const expected = `fallback`;
    assert.equal(actual, expected);
  });
});
