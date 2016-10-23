
# git-stats-colors

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/git-stats-colors.svg)](https://www.npmjs.com/package/git-stats-colors) [![Downloads](https://img.shields.io/npm/dt/git-stats-colors.svg)](https://www.npmjs.com/package/git-stats-colors) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Adds colors to the git-stats inputs.

## :cloud: Installation

```sh
$ npm i --save git-stats-colors
```


## :clipboard: Example



```js
const GitStatsColors = require("git-stats-colors");

console.log(GitStatsColors("DARK"));
// { background: '#111111',
//   foreground: '#565656',
//   levels: [ '#343434', '#2e643d', '#589f43', '#98bc21', '#b9fc04' ] }

console.log(GitStatsColors("⬚ ▢ ▤ ▣ ◼", "DARK"));
// ◼ ◼ ◼ ◼ ◼

console.log(GitStatsColors("⬚ ▢ ▤ ▣ ◼", "LIGHT"));
// ◼ ◼ ◼ ◼ ◼

console.log(GitStatsColors("⬚ ▢ ▤ ▣ ◼ ,", "LIGHT"));
// ◼ ◼ ◼ ◼ ◼ ,
```

## :memo: Documentation


### `GitStatsColors(input, thm)`
Adds colors to the git-stats inputs.

If called with one argument, the raw theme object will be returned.

#### Params
- **String** `input`: The input string.
- **String|Object** `thm`: The theme object or name.

#### Return
- **String** The colored result.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`cli-cal`](https://github.com/fnogatz/cli-cal) (by Falco Nogatz)—Github-like calendar graph for the CLI
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
