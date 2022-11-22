// |reftest| skip -- Temporal is not supported
// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: >
    Calendar.dateFromFields method is called with a null-prototype fields object
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarCheckFieldsPrototypePollution();
const instance = new Temporal.ZonedDateTime(0n, "UTC", calendar);
instance.with({ day: 24 });
assert.sameValue(calendar.dateFromFieldsCallCount, 1, "dateFromFields should have been called on the calendar");

reportCompare(0, 0);
