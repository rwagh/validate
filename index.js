import date from "./date";
module.export = {
  isDate: (value) => {
    let pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(value);
  },

  isTime: (value) => {
    let pattern = /^\d{2}:\d{2}:\d{2}$/;
    return pattern.test(value);
  },

  isDateTime: (value) => {
    let pattern = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/;
    return value.match(pattern);
  },

  isValidDate: (first, op, second) => {
    const date1st = new Date(first);
    let date2nd = new Date(second);
    if (op === "<") {
      return date1st.getTime() < date2nd.getTime();
    } else if (op === "<=") {
      return date1st.getTime() <= date2nd.getTime();
    } else if (op === ">") {
      return date1st.getTime() > date2nd.getTime();
    } else if (op === ">=") {
      return date1st.getTime() >= date2nd.getTime();
    }
  },
  convert: (culture, timeZone) => {
    var aestTime = new Date().toLocaleString(culture, { timeZone: timeZone });
    return new Date(aestTime);
  },
  isUndefined: (value) => {
    return value === undefined;
  },
  isNullOrEmpty: (value) => {
    return value === null || value.trim() === "";
  },
  isPhone: (value) => {
    let pattern = /^[+]?\d+$/;
    return pattern.test(value);
  },
  isEmail: (email) => {
    const regx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(String(email).toLowerCase());
  },
};
