"use strict";

const Couleurs = require("couleurs");

// Constants
const THEMES = {
    DARK: {
      background: "#111111"
    , foreground: "#565656"
    , levels: [
        "#343434"
      , "#2e643d"
      , "#589f43"
      , "#98bc21"
      , "#b9fc04"
      ]
    }
  , LIGHT: {
      background: "#ffffff"
    , foreground: "#565656"
    , levels: [
        "#C2C2C2"
      , "#b9edcd"
      , "#009139"
      , "#15763b"
      , "#096a2f"
      ]
    }
};

const SQUARES = [
   "⬚"
 , "▢"
 , "▤"
 , "▣"
 , "◼"
];

/**
 * GitStatsColors
 * Adds colors to the git-stats inputs.
 *
 * If called with one argument, the raw theme object will be returned.
 *
 * @name GitStatsColors
 * @function
 * @param {String} input The input string.
 * @param {String|Object} thm The theme object or name.
 * @return {String} The colored result.
 */
module.exports = function GitStatsColors (input, thm) {

    if (arguments.length === 1) {
        thm = input || "DARK";
        let ex = THEMES[thm];
        return ex || (typeof thm === "string" ? THEMES.DARK : thm);
    }

    thm = thm || "DARK";


    let theme = thm && thm.constructor === Object ? thm : THEMES[thm];

    // Padding right
    input = input.replace(/╝|╗/gm, "═$&")
    input = input.replace(/║$/gm, " $&")
    input = input.split("");

    // Add colors
    for (let i =0; i < input.length; ++i) {
        let c = input[i]
          , level = SQUARES.indexOf(c)
          ;


        if (level !== -1) {
            input[i] = Couleurs("◼", theme.levels[level]);
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
