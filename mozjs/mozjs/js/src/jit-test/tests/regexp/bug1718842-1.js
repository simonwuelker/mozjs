var g = newGlobal({sameZoneAs: this});

var re1 = RegExp("(?<a>a)");
var re2 = g.RegExp("(?<a>a)");

re1.exec("a");
re2.exec("a");
