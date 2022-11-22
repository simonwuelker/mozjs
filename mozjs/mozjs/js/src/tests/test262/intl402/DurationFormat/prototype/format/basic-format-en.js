// |reftest| skip -- Intl.DurationFormat is not supported
// Copyright 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.DurationFormat.prototype.format
description: Test if format method formats duration correctly
locale: [en-US]
features: [Intl.DurationFormat]
---*/

const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

const df = new Intl.DurationFormat('en');

assert.sameValue(df.format(duration), "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, and 9 nanoseconds");

reportCompare(0, 0);
