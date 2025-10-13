"use strict";

const GitStatsColors = require("../lib");

console.log(GitStatsColors("DARK"));
// { background: '#111111',
//   foreground: '#565656',
//   levels: [ '#343434', '#2e643d', '#589f43', '#98bc21', '#b9fc04' ] }

console.log(GitStatsColors("This is text ⬚ ▢ ▤ ▣ ◼", "DARK"));
// ◼ ◼ ◼ ◼ ◼

console.log(GitStatsColors("This is text ⬚ ▢ ▤ ▣ ◼", "LIGHT"));
// ◼ ◼ ◼ ◼ ◼

console.log(GitStatsColors("THis is text ⬚ ▢ ▤ ▣ ◼ ,", "LIGHT"));
// ◼ ◼ ◼ ◼ ◼ ,
