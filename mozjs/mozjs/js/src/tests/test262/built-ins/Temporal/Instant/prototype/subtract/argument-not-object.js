// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
description: Passing a primitive other than string to subtract() throws
features: [Symbol, Temporal]
---*/

const instance = new Temporal.Instant(1_000_000_000_000_000_000n);
assert.throws(RangeError, () => instance.subtract(undefined), "undefined");
assert.throws(RangeError, () => instance.subtract(null), "null");
assert.throws(RangeError, () => instance.subtract(true), "boolean");
assert.throws(RangeError, () => instance.subtract(""), "empty string");
assert.throws(TypeError, () => instance.subtract(Symbol()), "Symbol");
assert.throws(RangeError, () => instance.subtract(7), "number");
assert.throws(RangeError, () => instance.subtract(7n), "bigint");
assert.throws(TypeError, () => instance.subtract([]), "array");
assert.throws(TypeError, () => instance.subtract(() => {}), "function");

reportCompare(0, 0);
