export const validate = (obj) => {
  const { regexToMatch, required, value } = obj;
  if (regexToMatch != null) {
    let pattern = new RegExp(regexToMatch);
    return pattern.test(value);
  } else if (required) {
    return value.length != 0;
  }
};
