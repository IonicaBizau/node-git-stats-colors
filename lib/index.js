"use strict";

const Couleurs = require("couleurs");

// Constants
const THEMES = {
    DARK: {
      background: "#111111"
    , foreground: "#565656"
    , squares: {
        "⬚": Couleurs("◼", "#343434")
      , "▢": Couleurs("◼", "#2e643d")
      , "▤": Couleurs("◼", "#589f43")
      , "▣": Couleurs("◼", "#98bc21")
      , "◼": Couleurs("◼", "#b9fc04")
      }
    }
  , LIGHT: {
      background: "#ffffff"
    , foreground: "#565656"
    , squares: {
        "⬚": Couleurs("◼", "#C2C2C2")
      , "▢": Couleurs("◼", "#b9edcd")
      , "▤": Couleurs("◼", "#009139")
      , "▣": Couleurs("◼", "#15763b")
      , "◼": Couleurs("◼", "#096a2f")
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
module.exports = function GitStatsColors (input, thm) {

    thm = thm || "DARK";

    let theme = thm && thm.constructor === Object ? thm : THEMES[thm]
      ;

    // Padding right
    input = input.replace(/╝|╗/gm, "═$&")
    input = input.replace(/║$/gm, " $&")
    input = input.split("");

    // Add colors
    for (let i =0; i < input.length; ++i) {
        let c = input[i]
          , sq = Object.keys(theme.squares)
          ;

        if (sq.indexOf(c) !== -1) {
            input[i] = theme.squares[c];
        } else if (/^(╔|═|╗|║|╝|═|╚|║|\-|\–|\,|\:|\||[a-z]|[0-9])$/i.test(c)) {
            input[i] = Couleurs(c, theme.foreground);
        }
    }

    // Add background
    input = input.join("").split("\n").map(function (c) {
        return Couleurs.bg(c, theme.background)
    });

    input = input.join("\n")
    return input;
};
