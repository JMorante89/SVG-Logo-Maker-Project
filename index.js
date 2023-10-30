const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');
const Text = require('./lib/Text');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter logo text, maximum 5 characters:', 
        validate: function (value) {
            if (value.length <= 0) {
                return 'Please enter a text';
            }
            if (value.length <= 5) {
                return true;
            }
            return 'Please enter a text with maximum 5 characters';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter text color:',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'Please choose a logo shape:',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Please enter logo color:',
    }
]) .then(({text, textColor, logoShape, logoColor}) => {
    const textObject = new Text(text, textColor);
    let shape;
    if (logoShape === 'Circle') {
        shape = new Circle(logoColor);
    }
    if (logoShape === 'Square') {
        shape = new Square(logoColor);
    }
    if (logoShape === 'Triangle') {
        shape = new Triangle(logoColor);
    }
    const svg = 
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${textObject.render()}
</svg>`;
    fs.writeFile('dist/logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});