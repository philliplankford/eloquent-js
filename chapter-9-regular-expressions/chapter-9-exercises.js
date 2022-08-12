// 9.1 - Regexp Golf
// write a regex expression that matches a given pattern
// the expression should be as small as possible

// car and cat
const carCat = /cat|car/;
// alternate option: ca?[r|t]
// answer: ca[rt]

// pop and prop
const popProp = /pr?ops?/;
// alternate option: pop|props
// answer: pr?op

// ferret, ferry, and ferrari
const ferr = /ferr(et|y|ari)/;
// first try: ferr[aey](t|ri|)

// any word ending in ious
const endIous = /\w+ious/;
// answer ious\b

// whitespace followed by period, comma, colon, or semi colon
const badPunc = / [.,:;]/;
// answer \s[./:;] (mine is shorter)

// a word longer than six letters
const moreThanSix = /\w{6,}/;
// answer \w{7}

// a word without the letter e or E
const noE = /\b[^\We]+\b/;

module.exports = { carCat, popProp, ferr, endIous, badPunc, moreThanSix, noE };

// 9.2 - Quoting Style
// you have written a story with single quotation marks
// replace all dialogue quote with double quotes
// keep single quotes like aren't
// call the replace method

const singleToDouble = /(^|\W.)'|'(\W|$)/g;
// answer: (^|\W)'|'(\W|$)
// answer would take out punctuation before a quote
// (^|\W.)'|'(\W|$) <- fixed
// (^|[^\.?!\w])'|'(\W|$) still matches white space
module.exports.singleToDouble = singleToDouble;

// 9.3 - Numbers Again
// Write an expression that only matches JavaScript style numbers
// supports optional + or - in front of number
// supports decimal dot
// supports exponent notation 5e-3 1E10 (optional sign in front of exponent)
// not necessary for numbers to be in front or after the dot
// number cannot be a dot alone

const jsNums = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

// my working answer ^[\.+-]?\d+\.?|e|\d|[-+]?\d+$
module.exports.jsNums = jsNums;