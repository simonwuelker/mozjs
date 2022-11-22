// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: sec-names-and-keywords
description: |
  Test that Unicode v14.0.0 ID_Start characters are accepted as
  identifier start characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
---*/

var \u0870\u0871\u0872\u0873\u0874\u0875\u0876\u0877\u0878\u0879\u087A\u087B\u087C\u087D\u087E\u087F\u0880\u0881\u0882\u0883\u0884\u0885\u0886\u0887\u0889\u088A\u088B\u088C\u088D\u088E\u08B5\u08C8\u08C9\u0C5D\u0CDD\u170D\u171F\u1B4C\u2C2F\u2C5F\u9FFD\u9FFE\u9FFF\uA7C0\uA7C1\uA7D0\uA7D1\uA7D3\uA7D5\uA7D6\uA7D7\uA7D8\uA7D9\uA7F2\uA7F3\uA7F4\u{10570}\u{10571}\u{10572}\u{10573}\u{10574}\u{10575}\u{10576}\u{10577}\u{10578}\u{10579}\u{1057A}\u{1057C}\u{1057D}\u{1057E}\u{1057F}\u{10580}\u{10581}\u{10582}\u{10583}\u{10584}\u{10585}\u{10586}\u{10587}\u{10588}\u{10589}\u{1058A}\u{1058C}\u{1058D}\u{1058E}\u{1058F}\u{10590}\u{10591}\u{10592}\u{10594}\u{10595}\u{10597}\u{10598}\u{10599}\u{1059A}\u{1059B}\u{1059C}\u{1059D}\u{1059E}\u{1059F}\u{105A0}\u{105A1}\u{105A3}\u{105A4}\u{105A5}\u{105A6}\u{105A7}\u{105A8}\u{105A9}\u{105AA}\u{105AB}\u{105AC}\u{105AD}\u{105AE}\u{105AF}\u{105B0}\u{105B1}\u{105B3}\u{105B4}\u{105B5}\u{105B6}\u{105B7}\u{105B8}\u{105B9}\u{105BB}\u{105BC}\u{10780}\u{10781}\u{10782}\u{10783}\u{10784}\u{10785}\u{10787}\u{10788}\u{10789}\u{1078A}\u{1078B}\u{1078C}\u{1078D}\u{1078E}\u{1078F}\u{10790}\u{10791}\u{10792}\u{10793}\u{10794}\u{10795}\u{10796}\u{10797}\u{10798}\u{10799}\u{1079A}\u{1079B}\u{1079C}\u{1079D}\u{1079E}\u{1079F}\u{107A0}\u{107A1}\u{107A2}\u{107A3}\u{107A4}\u{107A5}\u{107A6}\u{107A7}\u{107A8}\u{107A9}\u{107AA}\u{107AB}\u{107AC}\u{107AD}\u{107AE}\u{107AF}\u{107B0}\u{107B2}\u{107B3}\u{107B4}\u{107B5}\u{107B6}\u{107B7}\u{107B8}\u{107B9}\u{107BA}\u{10F70}\u{10F71}\u{10F72}\u{10F73}\u{10F74}\u{10F75}\u{10F76}\u{10F77}\u{10F78}\u{10F79}\u{10F7A}\u{10F7B}\u{10F7C}\u{10F7D}\u{10F7E}\u{10F7F}\u{10F80}\u{10F81}\u{11071}\u{11072}\u{11075}\u{11740}\u{11741}\u{11742}\u{11743}\u{11744}\u{11745}\u{11746}\u{11AB0}\u{11AB1}\u{11AB2}\u{11AB3}\u{11AB4}\u{11AB5}\u{11AB6}\u{11AB7}\u{11AB8}\u{11AB9}\u{11ABA}\u{11ABB}\u{11ABC}\u{11ABD}\u{11ABE}\u{11ABF}\u{12F90}\u{12F91}\u{12F92}\u{12F93}\u{12F94}\u{12F95}\u{12F96}\u{12F97}\u{12F98}\u{12F99}\u{12F9A}\u{12F9B}\u{12F9C}\u{12F9D}\u{12F9E}\u{12F9F}\u{12FA0}\u{12FA1}\u{12FA2}\u{12FA3}\u{12FA4}\u{12FA5}\u{12FA6}\u{12FA7}\u{12FA8}\u{12FA9}\u{12FAA}\u{12FAB}\u{12FAC}\u{12FAD}\u{12FAE}\u{12FAF}\u{12FB0}\u{12FB1}\u{12FB2}\u{12FB3}\u{12FB4}\u{12FB5}\u{12FB6}\u{12FB7}\u{12FB8}\u{12FB9}\u{12FBA}\u{12FBB}\u{12FBC}\u{12FBD}\u{12FBE}\u{12FBF}\u{12FC0}\u{12FC1}\u{12FC2}\u{12FC3}\u{12FC4}\u{12FC5}\u{12FC6}\u{12FC7}\u{12FC8}\u{12FC9}\u{12FCA}\u{12FCB}\u{12FCC}\u{12FCD}\u{12FCE}\u{12FCF}\u{12FD0}\u{12FD1}\u{12FD2}\u{12FD3}\u{12FD4}\u{12FD5}\u{12FD6}\u{12FD7}\u{12FD8}\u{12FD9}\u{12FDA}\u{12FDB}\u{12FDC}\u{12FDD}\u{12FDE}\u{12FDF}\u{12FE0}\u{12FE1}\u{12FE2}\u{12FE3}\u{12FE4}\u{12FE5}\u{12FE6}\u{12FE7}\u{12FE8}\u{12FE9}\u{12FEA}\u{12FEB}\u{12FEC}\u{12FED}\u{12FEE}\u{12FEF}\u{12FF0}\u{16A70}\u{16A71}\u{16A72}\u{16A73}\u{16A74}\u{16A75}\u{16A76}\u{16A77}\u{16A78}\u{16A79}\u{16A7A}\u{16A7B}\u{16A7C}\u{16A7D}\u{16A7E}\u{16A7F}\u{16A80}\u{16A81}\u{16A82}\u{16A83}\u{16A84}\u{16A85}\u{16A86}\u{16A87}\u{16A88}\u{16A89}\u{16A8A}\u{16A8B}\u{16A8C}\u{16A8D}\u{16A8E}\u{16A8F}\u{16A90}\u{16A91}\u{16A92}\u{16A93}\u{16A94}\u{16A95}\u{16A96}\u{16A97}\u{16A98}\u{16A99}\u{16A9A}\u{16A9B}\u{16A9C}\u{16A9D}\u{16A9E}\u{16A9F}\u{16AA0}\u{16AA1}\u{16AA2}\u{16AA3}\u{16AA4}\u{16AA5}\u{16AA6}\u{16AA7}\u{16AA8}\u{16AA9}\u{16AAA}\u{16AAB}\u{16AAC}\u{16AAD}\u{16AAE}\u{16AAF}\u{16AB0}\u{16AB1}\u{16AB2}\u{16AB3}\u{16AB4}\u{16AB5}\u{16AB6}\u{16AB7}\u{16AB8}\u{16AB9}\u{16ABA}\u{16ABB}\u{16ABC}\u{16ABD}\u{16ABE}\u{1AFF0}\u{1AFF1}\u{1AFF2}\u{1AFF3}\u{1AFF5}\u{1AFF6}\u{1AFF7}\u{1AFF8}\u{1AFF9}\u{1AFFA}\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B11F}\u{1B120}\u{1B121}\u{1B122}\u{1DF00}\u{1DF01}\u{1DF02}\u{1DF03}\u{1DF04}\u{1DF05}\u{1DF06}\u{1DF07}\u{1DF08}\u{1DF09}\u{1DF0A}\u{1DF0B}\u{1DF0C}\u{1DF0D}\u{1DF0E}\u{1DF0F}\u{1DF10}\u{1DF11}\u{1DF12}\u{1DF13}\u{1DF14}\u{1DF15}\u{1DF16}\u{1DF17}\u{1DF18}\u{1DF19}\u{1DF1A}\u{1DF1B}\u{1DF1C}\u{1DF1D}\u{1DF1E}\u{1E290}\u{1E291}\u{1E292}\u{1E293}\u{1E294}\u{1E295}\u{1E296}\u{1E297}\u{1E298}\u{1E299}\u{1E29A}\u{1E29B}\u{1E29C}\u{1E29D}\u{1E29E}\u{1E29F}\u{1E2A0}\u{1E2A1}\u{1E2A2}\u{1E2A3}\u{1E2A4}\u{1E2A5}\u{1E2A6}\u{1E2A7}\u{1E2A8}\u{1E2A9}\u{1E2AA}\u{1E2AB}\u{1E2AC}\u{1E2AD}\u{1E7E0}\u{1E7E1}\u{1E7E2}\u{1E7E3}\u{1E7E4}\u{1E7E5}\u{1E7E6}\u{1E7E8}\u{1E7E9}\u{1E7EA}\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}\u{1E7F1}\u{1E7F2}\u{1E7F3}\u{1E7F4}\u{1E7F5}\u{1E7F6}\u{1E7F7}\u{1E7F8}\u{1E7F9}\u{1E7FA}\u{1E7FB}\u{1E7FC}\u{1E7FD}\u{1E7FE}\u{2A6DE}\u{2A6DF}\u{2B735}\u{2B736}\u{2B737}\u{2B738};

reportCompare(0, 0);
