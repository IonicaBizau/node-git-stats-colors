// Dependencies
var Couleurs = require("couleurs")()
  , AnsiParser = require("ansi-parser")
  ;

// Constants
const THEMES = {
    DARK: {
      background: "#11181F"
    , foreground: "#565656"
    , squares: {
        "⬚": Couleurs.fg("■", "#343434")
      , "▢": Couleurs.fg("■", "#2e643d")
      , "▤": Couleurs.fg("■", "#589f43")
      , "▣": Couleurs.fg("■", "#98bc21")
      , "■": Couleurs.fg("■", "#b9fc04")
      }
    }
  , LIGHT: {
      background: "#ffffff"
    , foreground: "#565656"
    , squares: {
        "⬚": Couleurs.fg("■", "#C2C2C2")
      , "▢": Couleurs.fg("■", "#b9edcd")
      , "▤": Couleurs.fg("■", "#009139")
      , "▣": Couleurs.fg("■", "#15763b")
      , "■": Couleurs.fg("■", "#096a2f")
      }
    }
};

/**
 * GitStatsColors
 * Adds colors to the git-stats inputs.
 *
 * @name GitStatsColors
 * @function
 * @param {String} input The input string.
 * @param {String|Object} thm The theme object or name.
 * @return {String} The colored result.
 */
var GitStatsColors = module.exports = function (input, thm) {
    thm = thm || "DARK";

    var theme = thm && thm.constructor === Object ? thm : THEMES[thm]
      , parsed = AnsiParser.parse(input)
      , i = 0
      , c = null
      , sq = Object.keys(theme.squares)
      ;

    // Padding right
    input = input.replace(/╝|╗/gm, "═$&")
    input = input.replace(/║$/gm, " $&")
    input = input.split("");

    // Add colors
    for (; i < input.length; ++i) {
        c = input[i];
        if (sq.indexOf(c) !== -1) {
            input[i] = theme.squares[c];
        } else if (/^(╔|═|╗|║|╝|═|╚|║|\-|\:|\||[a-z]|[0-9])$/i.test(c)) {
            input[i] = Couleurs.fg(c, theme.foreground);
        }
    }

    // Add background
    input = input.join("").split("\n").map(function (c) {
        return Couleurs.bg(c, theme.background)
    });

    input = input.join("\n")
    return input;
};
