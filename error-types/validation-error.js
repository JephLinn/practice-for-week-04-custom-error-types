class ValidationError extends Error {
  constructor(message = "Invalid Input", ...params) {
    super(...params);
    
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    };

    this.name = "ValidationError";
    
  };

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}