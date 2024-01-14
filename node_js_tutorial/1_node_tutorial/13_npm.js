// 13) NPM: NODE PACKAGE MANAGER

// node comes with npm
// anyone can publish a module/package on npm, no quality control
// "package"/"module"/"dependency" a folder that contains js code

// npm - global command, comes with node
// > npm -- version

// local dependency - use it only in this particular project
// > npm i <packageName>

// global dependency - use it in any project
// > npm install -g <packageName>
// > sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// automatic approac
// > npm init (step by step, press enter to skip)
// > npm init -y (everything default)

// inside the package.json the dependency "lodash" is just used as an example
// some packages have dependencies, and installing such package will include and automatically install its dependencies, in this example bootstrap comes with @popperjs
// node_modules stores the dependecies

// use installed third party module
const lodash = require("lodash");

// example using the module
const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);

// when pushing a node project to github, you don't want to push the node_modules folder as this can be very big, do this by writing "/node_modules" in the .gitignore
// when pulling the node project to get/install the dependencies, the package.json is used to find the dependencies and installed like this:
// > npm install

// dev/developer dependency - don't need in production, e.g. formatting, testing packages
// > npm i nodemon -D
// or > npm i nodemon --save-dev
// nodemon is a package

// nodemon restarts the app everytime you make changes in the node project and save it

// uninstall package:
// > npm uninstall <packageName>
// or remove the dependency from the package.json delete node_modules and re-install the depedencies with > npm install

// NPX : package runner
// run package without installing it e.g. create-react-app
// > npx create-react-app <appName>

// package-lock.json has more information about each depedency
// for example the version of the dependency's dependencies
// installing the correct versions is important as it may cause bugs due to funcitionalities not being available or being changed in different versions
