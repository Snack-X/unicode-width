"use strict";

const fs = require("fs");
let content = fs.readFileSync(process.argv[2], { encoding: "utf8" });
content = content.split("\n");

let data = { A: [], F: [], H: [], N: [], Na: [], W: [] };
let previous = { A: null, F: null, H: null, N: null, Na: null, W: null };

content.forEach(line => {
  let match = line.match(/^([0-9A-F]+);(A|F|H|Na?|W)/);
  if(match) {
    let category = match[2];
    let arr = data[category];
    let codepoint = parseInt(match[1], 16);

    if(previous[category] + 1 === codepoint)
      arr[arr.length - 1][1] = match[1];
    else
      arr.push([ match[1], match[1] ]);

    previous[category] = codepoint;

    return;
  }

  match = line.match(/^([0-9A-F]+)\.\.([0-9A-F]+);(A|F|H|Na?|W)/);
  if(match) {
    let category = match[3];
    let arr = data[category];
    let codepointStart = parseInt(match[1], 16);
    let codepointEnd = parseInt(match[2], 16);

    if(previous[category] + 1 === codepointStart)
      arr[arr.length - 1][1] = match[2];
    else
      arr.push([ match[1], match[2] ]);

    previous[category] = codepointEnd
  }
});

let printAsIf = category => {
  let output = "";
  let ranges = data[category];
  output = ranges.map(range => {
    if(range[0] === range[1]) return `(0x${range[0]} == codePoint)`;
    else return `(0x${range[0]} <= codePoint && codePoint <= 0x${range[1]})`;
  }).join(" ||\n    ");
  console.log(`if (${output}) {\n  return '${category}';\n}`);
};

printAsIf("F");
printAsIf("H");
printAsIf("W");
printAsIf("Na");
printAsIf("A");
