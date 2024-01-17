const loginByName = (name) => {
  // if name provided
  if (name) {
    return { success: true, msg: `Welcome ${name}` };
  }
  return { success: false, msg: "Please provide credentials" };
};

module.exports = loginByName;
