// |jit-test| skip-if: !wasmSimdEnabled()

/* Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:4
let $0 = instantiate(`(module
  (func (export "i16x8.q15mulr_sat_s") (param v128 v128) (result v128) (i16x8.q15mulr_sat_s (local.get 0) (local.get 1)))
)`);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:10
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:13
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:16
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:19
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:22
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:25
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:28
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    ]),
  [i16x8([0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:31
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
      i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    ]),
  [i16x8([0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:34
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i16x8([0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:37
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i16x8([0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000, 0x2000])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:40
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
      i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    ]),
  [i16x8([0x2001, 0x2001, 0x2001, 0x2001, 0x2001, 0x2001, 0x2001, 0x2001])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:43
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:46
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:49
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:52
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:55
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:58
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:61
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    ]),
  [i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:64
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    ]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:67
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
      i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    ]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:70
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:73
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:76
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:79
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    ]),
  [i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:82
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    ]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:85
assert_return(
  () =>
    invoke($0, `i16x8.q15mulr_sat_s`, [
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
      i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    ]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:90
assert_invalid(
  () =>
    instantiate(
      `(module (func (result v128) (i16x8.q15mulr_sat_s (i32.const 0) (f32.const 0.0))))`,
    ),
  `type mismatch`,
);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:94
assert_invalid(() =>
  instantiate(`(module
    (func $$i16x8.q15mulr_sat_s-1st-arg-empty (result v128)
      (i16x8.q15mulr_sat_s (v128.const i16x8 0 0 0 0 0 0 0 0))
    )
  )`), `type mismatch`);

// ./test/core/simd/simd_i16x8_q15mulr_sat_s.wast:102
assert_invalid(() =>
  instantiate(`(module
    (func $$i16x8.q15mulr_sat_s-arg-empty (result v128)
      (i16x8.q15mulr_sat_s)
    )
  )`), `type mismatch`);
