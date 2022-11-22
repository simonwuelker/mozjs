// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Batak`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001BC0, 0x001BF3],
    [0x001BFC, 0x001BFF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Batak}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Batak}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Batk}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Batk}"
);
testPropertyEscapes(
  /^\p{scx=Batak}+$/u,
  matchSymbols,
  "\\p{scx=Batak}"
);
testPropertyEscapes(
  /^\p{scx=Batk}+$/u,
  matchSymbols,
  "\\p{scx=Batk}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001BBF],
    [0x001BF4, 0x001BFB],
    [0x001C00, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Batak}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Batak}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Batk}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Batk}"
);
testPropertyEscapes(
  /^\P{scx=Batak}+$/u,
  nonMatchSymbols,
  "\\P{scx=Batak}"
);
testPropertyEscapes(
  /^\P{scx=Batk}+$/u,
  nonMatchSymbols,
  "\\P{scx=Batk}"
);

reportCompare(0, 0);
