// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: Tests calculations with roundingMode "floor".
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const earlier = Temporal.PlainYearMonth.from("2019-01");
const later = Temporal.PlainYearMonth.from("2021-09");

TemporalHelpers.assertDuration(
  later.since(earlier, { smallestUnit: "years", roundingMode: "floor" }),
  /* years = */ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, "years");
TemporalHelpers.assertDuration(
  earlier.since(later, { smallestUnit: "years", roundingMode: "floor" }),
  /* years = */ -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, "years");

TemporalHelpers.assertDuration(
  later.since(earlier, { smallestUnit: "months", roundingMode: "floor" }),
  /* years = */ 2, /* months = */ 8, 0, 0, 0, 0, 0, 0, 0, 0, "months");
TemporalHelpers.assertDuration(
  earlier.since(later, { smallestUnit: "months", roundingMode: "floor" }),
  /* years = */ -2, /* months = */ -8, 0, 0, 0, 0, 0, 0, 0, 0, "months");

reportCompare(0, 0);
