# Unicode Width

Get [East Asian Width](http://www.unicode.org/reports/tr11/) from a character.

'F'(Fullwidth), 'H'(Halfwidth), 'W'(Wide), 'Na'(Narrow), 'A'(Ambiguous) or 'N'(Natural).

Original Code is [東アジアの文字幅 (East Asian Width) の判定 - 中途](http://d.hatena.ne.jp/takenspc/20111126#1322252878).

## Install

    $ npm install unicode-width

## Usage

    var uw = require('unicode-width');
    console.log(uw.getWidth('￦')) // 'F'
    console.log(uw.getWidth('｡')) // 'H'
    console.log(uw.getWidth('뀀')) // 'W'
    console.log(uw.getWidth('a')) // 'Na'
    console.log(uw.getWidth('①')) // 'A'
    console.log(uw.getWidth('ف')) // 'N'

    console.log(uw.characterLength('￦')) // 2
    console.log(uw.characterLength('｡')) // 1
    console.log(uw.characterLength('뀀')) // 2
    console.log(uw.characterLength('a')) // 1
    console.log(uw.characterLength('①')) // 2
    console.log(uw.characterLength('ف')) // 1

    console.log(uw.length('あいうえお')) // 10
    console.log(uw.length('abcdefg')) // 7
    console.log(uw.length('￠￦｡ￜㄅ뀀¢⟭a⊙①بف')) // 19
