// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Surrogate`
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
    [0x00DC00, 0x00DFFF],
    [0x00D800, 0x00DBFF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Surrogate}+$/u,
  matchSymbols,
  "\\p{General_Category=Surrogate}"
);
testPropertyEscapes(
  /^\p{General_Category=Cs}+$/u,
  matchSymbols,
  "\\p{General_Category=Cs}"
);
testPropertyEscapes(
  /^\p{gc=Surrogate}+$/u,
  matchSymbols,
  "\\p{gc=Surrogate}"
);
testPropertyEscapes(
  /^\p{gc=Cs}+$/u,
  matchSymbols,
  "\\p{gc=Cs}"
);
testPropertyEscapes(
  /^\p{Surrogate}+$/u,
  matchSymbols,
  "\\p{Surrogate}"
);
testPropertyEscapes(
  /^\p{Cs}+$/u,
  matchSymbols,
  "\\p{Cs}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000000, 0x00D7FF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Surrogate}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Surrogate}"
);
testPropertyEscapes(
  /^\P{General_Category=Cs}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Cs}"
);
testPropertyEscapes(
  /^\P{gc=Surrogate}+$/u,
  nonMatchSymbols,
  "\\P{gc=Surrogate}"
);
testPropertyEscapes(
  /^\P{gc=Cs}+$/u,
  nonMatchSymbols,
  "\\P{gc=Cs}"
);
testPropertyEscapes(
  /^\P{Surrogate}+$/u,
  nonMatchSymbols,
  "\\P{Surrogate}"
);
testPropertyEscapes(
  /^\P{Cs}+$/u,
  nonMatchSymbols,
  "\\P{Cs}"
);

reportCompare(0, 0);
