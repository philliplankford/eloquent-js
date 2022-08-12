// 9.1 - Regexp Golf
// write a regex expression that matches a given pattern
// the expression should be as small as possible

// car and cat
const carCat = /cat|car/gi;
// alternate option: ca?[r|t]
// answer: ca[rt]

// pop and prop
const popProp = /pr?ops?/gi;
// alternate option: pop|props
// answer: pr?op

// ferret, ferry, and ferrari
const ferr = /ferr(et|y|ari)/gi;
// first try: ferr[aey](t|ri|)

// any word ending in ious
const endIous = /\w+ious/gi;
// answer ious\b

// whitespace followed by period, comma, colon, or semi colon
const badPunc = / [.,:;]/gi;
// answer \s[./:;] (mine is shorter)

// a word longer than six letters
const moreThanSix = /\w{6,}/gi;
// answer \w{7}

// a word without the letter e or E
const noE = /\b[^\We]+\b/gi

module.exports = { carCat, popProp, ferr, endIous, badPunc, moreThanSix, noE };