const _0x5ce2fe = _0x348e;
(function (_0x324a01, _0x174c70) {
  const _0x2e1dde = _0x348e,
    _0x185e4c = _0x324a01();
  while (!![]) {
    try {
      const _0x41935e =
        -parseInt(_0x2e1dde(0x137)) / 0x1 +
        (-parseInt(_0x2e1dde(0x13f)) / 0x2) *
          (parseInt(_0x2e1dde(0x148)) / 0x3) +
        parseInt(_0x2e1dde(0x138)) / 0x4 +
        (-parseInt(_0x2e1dde(0x14d)) / 0x5) *
          (parseInt(_0x2e1dde(0x12f)) / 0x6) +
        parseInt(_0x2e1dde(0x134)) / 0x7 +
        parseInt(_0x2e1dde(0x125)) / 0x8 +
        -parseInt(_0x2e1dde(0x153)) / 0x9;
      if (_0x41935e === _0x174c70) break;
      else _0x185e4c["push"](_0x185e4c["shift"]());
    } catch (_0x513c5a) {
      _0x185e4c["push"](_0x185e4c["shift"]());
    }
  }
})(_0x1263, 0xebb6d),
  $(function () {
    const _0x51ed0c = _0x348e;
    $(_0x51ed0c(0x11b))["on"](_0x51ed0c(0x128), function (_0x45ae89) {
      makePoem(_0x45ae89);
    });
  });
const template1 = [
    _0x5ce2fe(0x130),
    _0x5ce2fe(0x121),
    _0x5ce2fe(0x129),
    _0x5ce2fe(0x13b),
    _0x5ce2fe(0x155),
    _0x5ce2fe(0x11f),
    "All\x20because\x20the\x20$a\x20has\x20to\x20run",
  ],
  template2 = [
    _0x5ce2fe(0x11d),
    _0x5ce2fe(0x140),
    _0x5ce2fe(0x142),
    _0x5ce2fe(0x144),
    _0x5ce2fe(0x124),
    _0x5ce2fe(0x14e),
    _0x5ce2fe(0x151),
  ],
  template3 = [
    _0x5ce2fe(0x127),
    _0x5ce2fe(0x13d),
    _0x5ce2fe(0x12a),
    _0x5ce2fe(0x13e),
    _0x5ce2fe(0x147),
    _0x5ce2fe(0x13c),
    "\x27What\x27s\x20really\x20the\x20matter?\x27\x20asked\x20the\x20$a",
    _0x5ce2fe(0x152),
    _0x5ce2fe(0x133),
  ],
  template4 = [
    _0x5ce2fe(0x14f),
    _0x5ce2fe(0x150),
    _0x5ce2fe(0x146),
    "The\x20$p\x20laughs\x20at\x20the\x20$a\x20and\x20says",
    _0x5ce2fe(0x13a),
    _0x5ce2fe(0x139),
    _0x5ce2fe(0x132),
    _0x5ce2fe(0x11c),
  ],
  template5 = [
    _0x5ce2fe(0x136),
    "The\x20$p\x20was\x20inquisitive\x20and\x20so\x20are\x20you",
    _0x5ce2fe(0x119),
    _0x5ce2fe(0x123),
    _0x5ce2fe(0x135),
    _0x5ce2fe(0x126),
    _0x5ce2fe(0x156),
    _0x5ce2fe(0x12b),
  ],
  templates = [template1, template2, template3, template4, template5];
function makePoem(_0x578a81) {
  const _0x62efd4 = _0x5ce2fe;
  _0x578a81["preventDefault"]();
  if (!validateInput()) return;
  var _0x57a334 = $(this);
  const _0x103734 = $("#plant")["val"](),
    _0x5a8300 = $(_0x62efd4(0x11e))[_0x62efd4(0x145)](),
    _0x53dc63 = _0x62efd4(0x131) + _0x103734 + _0x62efd4(0x14a) + _0x5a8300;
  var _0x3bd813 = "";
  const _0x592e70 = Math[_0x62efd4(0x12c)](
      Math[_0x62efd4(0x143)]() * templates[_0x62efd4(0x12e)]
    ),
    _0x26d4d8 = templates[_0x592e70];
  for (
    var _0x2767cf = 0x0;
    _0x2767cf < _0x26d4d8[_0x62efd4(0x12e)];
    _0x2767cf++
  ) {
    var _0x1c9c90 = _0x26d4d8[_0x2767cf][_0x62efd4(0x120)]("$a", _0x5a8300);
    (_0x1c9c90 = _0x1c9c90[_0x62efd4(0x120)]("$p", _0x103734)),
      (_0x3bd813 += _0x62efd4(0x118) + _0x1c9c90 + _0x62efd4(0x141));
  }
  $("#form-message")[_0x62efd4(0x154)](""),
    $(_0x62efd4(0x11a))[_0x62efd4(0x154)](_0x53dc63),
    $("#poetry-body")["html"](_0x3bd813);
}
function _0x1263() {
  const _0x456080 = [
    "#query-form",
    "\x27You\x20see?\x20All\x20you\x20have\x20to\x20do\x20is\x20to\x20raid\x20that\x20hotdog\x20stand!\x27",
    "The\x20$p\x20asked\x20the\x20sky",
    "#animal",
    "Look\x20around,\x20coffee\x20there\x20is\x20none",
    "replace",
    "The\x20morning\x20has\x20come",
    "#poetry-body",
    "The\x20$p\x20asks,\x20\x27What\x20is\x20the\x20origin?\x20For\x20$a\x20like\x20you?\x27",
    "\x27Why\x20did\x20you\x20choose\x20me?\x27,\x20the\x20$p\x20asked",
    "12343096OfylcB",
    "And\x20the\x20$a\x20just\x20wants\x20to\x20get\x20through",
    "The\x20$p\x20had\x20a\x20very\x20bad\x20day",
    "submit",
    "Rouse\x20the\x20$a",
    "The\x20$a\x20saw\x20the\x20$p\x20and\x20said",
    "\x27Both\x20me\x20and\x20you!\x27",
    "floor",
    "#plant",
    "length",
    "1484382lfbmxY",
    "Wake\x20up\x20the\x20$p",
    "The\x20",
    "The\x20$p\x20says,\x20\x27Man-made\x20things\x20are\x20not\x20all\x20bad!\x27",
    "\x27Because\x20you\x20just\x20stepped\x20on\x20me\x20and\x20now\x20I\x20am\x20going\x20to\x20die!\x27",
    "2982805ooLZsH",
    "The\x20$p\x20insists\x20on\x20asking",
    "The\x20firmament\x20is\x20vast\x20and\x20the\x20Milky\x20Way\x20is,\x20too.",
    "378022JLlDpQ",
    "3184136pEKPmS",
    "The\x20$a\x20says,\x20\x27how?\x20but\x20I\x20don\x27t\x20understand?\x27",
    "\x27The\x20destiny\x20is\x20in\x20our\x20hands\x20my\x20friend\x27",
    "Because\x20the\x20coffee\x20needs\x20to\x20be\x20done",
    "So\x20the\x20$a\x20inquired",
    "And\x20was\x20about\x20to\x20resign",
    "\x27There\x20is\x20always\x20tomorrow,\x20no\x20need\x20to\x20be\x20despised\x27",
    "60IPrgHP",
    "Why\x20am\x20I\x20not\x20inspired?",
    "</p>",
    "The\x20$a\x20then\x20came\x20falling\x20off\x20the\x20sky",
    "random",
    "The\x20$p\x20was\x20caught\x20by\x20surprise",
    "val",
    "And\x20the\x20$a\x20has\x20not\x20been\x20fed",
    "The\x20$p\x20said\x20the\x20$a\x20just\x20didn\x27t\x20understand",
    "98151cPUPTx",
    "Please\x20enter\x20the\x20name\x20of\x20a\x20plant",
    "\x20and\x20the\x20",
    "#form-message",
    "Please\x20enter\x20the\x20name\x20of\x20an\x20animal",
    "5voSVoL",
    "The\x20$a\x20said,\x20\x27I\x20need\x20to\x20eat\x20something,\x20that\x27s\x20why!\x27",
    "The\x20sky\x20is\x20red\x20and\x20the\x20$a\x20is\x20mad",
    "Because\x20men\x20are\x20destroying\x20the\x20planet",
    "\x27And\x20you\x20are\x20cheaper\x20than\x20anything\x20money\x20can\x20buy!\x27",
    "The\x20$p\x20cried\x20and\x20then\x20replied",
    "1733598KdJUCb",
    "text",
    "\x27I\x20need\x20the\x20coffee\x20now\x27,\x20says\x20the\x20$p",
    "The\x20$a\x20says,\x20\x27we\x20all\x20came\x20from\x20a\x20big\x20bang\x27",
    "<p>",
    "The\x20$a\x20barges\x20in\x20and\x20interrupts\x20the\x20$p",
    "#poetry-title",
  ];
  _0x1263 = function () {
    return _0x456080;
  };
  return _0x1263();
}
function resetResults() {
  const _0x224377 = _0x5ce2fe;
  $(_0x224377(0x12d))["text"](""),
    $(_0x224377(0x11e))[_0x224377(0x154)](""),
    $(_0x224377(0x14b))[_0x224377(0x154)](""),
    $(_0x224377(0x11a))[_0x224377(0x154)](""),
    $(_0x224377(0x122))[_0x224377(0x154)]("");
}
function _0x348e(_0x35f859, _0x458651) {
  const _0x126321 = _0x1263();
  return (
    (_0x348e = function (_0x348e35, _0x1333ac) {
      _0x348e35 = _0x348e35 - 0x118;
      let _0x3540b1 = _0x126321[_0x348e35];
      return _0x3540b1;
    }),
    _0x348e(_0x35f859, _0x458651)
  );
}
function validateInput() {
  const _0x5612a1 = _0x5ce2fe;
  if ($("#plant")["val"]()[_0x5612a1(0x12e)] == 0x0)
    return $(_0x5612a1(0x14b))[_0x5612a1(0x154)](_0x5612a1(0x149)), ![];
  if ($(_0x5612a1(0x11e))[_0x5612a1(0x145)]()[_0x5612a1(0x12e)] == 0x0)
    return $(_0x5612a1(0x14b))[_0x5612a1(0x154)](_0x5612a1(0x14c)), ![];
  return $(_0x5612a1(0x14b))[_0x5612a1(0x154)](""), !![];
}
