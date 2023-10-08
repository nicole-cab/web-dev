// TEMPLATE LITERALS

// js literals are values to variables, the literal values e.g. let name = "Nicole", in this case "Nicole" is the literal

// a template literal is a literal delimited with backtick (`) characters, used for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates

let text = `Hello World!`;

// you can use both single and double quotes inside a string

text = `He's often called "Johnny"`;

// multi-line strings

text = `This is
a multi - line
string.`;

// string interpolation to interpolate variables and expressions into strings

let firstName = "John";
let lastName = "Doe";

text = `Welcome ${firstName}, ${lastName}!`;

// expression substitution, string interpolation

let price = 10;
let VAT = 0.5;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

// HTML templates

let header = "Template literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;
