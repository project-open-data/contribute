// Putting util functions into the _ namespace, which is handy


// Run an array of functions in serial.
_.serial = function () {
    (_(arguments).reduceRight(_.wrap, function() {}))();
};


// Convert a javascript object to its YAML representation
_.toYAML = function(data) {
  function serializeValue(val) {
    function serializeArray(a) {
      return a.map(function(elem) { return "- "+ elem}).join("\n");
    }

    if (_.isArray(val)) return "\n"+serializeArray(val);
    return _.isNumber(val) || _.isBoolean(val) ? val : "\""+val+"\"";
  }
  return Object.keys(data).map(function(key) {
    return key +": "+ serializeValue(data[key]);
  }).join("\n");
};