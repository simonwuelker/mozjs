// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: Negative zero, as an extended year, is rejected
features: [Temporal, arrow-function]
---*/

const invalidStrings = [
  "-000000-10-31",
  "-000000-10-31T17:45",
  "-000000-10-31T17:45Z",
  "-000000-10-31T17:45+01:00",
  "-000000-10-31T17:45+00:00[UTC]",
];
const timeZone = new Temporal.TimeZone("UTC");
const instance = new Temporal.ZonedDateTime(0n, timeZone);
invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => instance.until(arg),
    "reject minus zero as extended year"
  );
});

reportCompare(0, 0);
