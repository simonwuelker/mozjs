// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const with_ = Temporal.PlainYearMonth.prototype.with;

assert.sameValue(typeof with_, "function");

const args = [{ year: 2022 }];

assert.throws(TypeError, () => with_.apply(undefined, args), "undefined");
assert.throws(TypeError, () => with_.apply(null, args), "null");
assert.throws(TypeError, () => with_.apply(true, args), "true");
assert.throws(TypeError, () => with_.apply("", args), "empty string");
assert.throws(TypeError, () => with_.apply(Symbol(), args), "symbol");
assert.throws(TypeError, () => with_.apply(1, args), "1");
assert.throws(TypeError, () => with_.apply({}, args), "plain object");
assert.throws(TypeError, () => with_.apply(Temporal.PlainYearMonth, args), "Temporal.PlainYearMonth");
assert.throws(TypeError, () => with_.apply(Temporal.PlainYearMonth.prototype, args), "Temporal.PlainYearMonth.prototype");

reportCompare(0, 0);
