// |reftest| skip -- Temporal is not supported
// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: Passing a primitive other than string to subtract() throws
features: [Symbol, Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 5, 2, 15, 30, 45, 987, 654, 321);
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
