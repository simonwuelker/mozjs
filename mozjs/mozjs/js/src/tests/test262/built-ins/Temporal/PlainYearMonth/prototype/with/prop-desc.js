// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: The "with" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.with,
  "function",
  "`typeof PlainYearMonth.prototype.with` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "with", {
  writable: true,
  enumerable: false,
  configurable: true,
});

reportCompare(0, 0);
