// |reftest| skip -- Temporal is not supported
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: >
  Temporal.ZonedDateTime.prototype.since does not implement [[Construct]], is not new-able
info: |
    Built-in function objects that are not identified as constructors do not implement the
    [[Construct]] internal method unless otherwise specified in the description of a particular
    function.
includes: [isConstructor.js]
features: [Reflect.construct, Temporal]
---*/

assert.throws(TypeError, () => {
  new Temporal.ZonedDateTime.prototype.since();
}, "Calling as constructor");

assert.sameValue(isConstructor(Temporal.ZonedDateTime.prototype.since), false,
  "isConstructor(Temporal.ZonedDateTime.prototype.since)");

reportCompare(0, 0);
