
module.exports = function invertPromise(p) {
  return p.then(
      function(x) { throw x; },
      function(x) { return x }
  );
};

