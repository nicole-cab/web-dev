const secret = "SUPER SECRET";
const nicole = "nicole";
const jack = "jack";

// you can access whatever is inside the exports object
console.log(module);

// share the variables for other modules to use but not the secret
module.exports = {
  nicole,
  jack,
};
