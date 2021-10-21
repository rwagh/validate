const validate = {
  isAlphabets: (value) => {
    let pattern = /^[a-zA-Z]+$/;
    return pattern.test(value);
  },
  isAlphaNumeric: (value) => {
    let pattern = /^[a-zA-Z0-9]+$/i;
    return pattern.test(value);
  },
  capitalize: (value) => {
    let wordArray = value.split(" ");
    let words = [];
    wordArray.forEach((word) => {
      const lower = word.toLowerCase();
      words.push(word.charAt(0).toUpperCase() + lower.slice(1));
    });
    return words.join(" ");
  },
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
    return value.test(pattern);
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
  convert: (value, timeZone) => {
    var dateString = new Date(value).toLocaleString("en-US", {
      timeZone: timeZone,
    });

    var target = new Date(dateString);
    var timeOffsetInMS = target.getTimezoneOffset() * 60000;
    target.setTime(target.getTime() - timeOffsetInMS);

    return target;
  },
  isUndefined: (value) => {
    return value === undefined;
  },
  isNullOrEmpty: (value) => {
    if (Array.isArray(value)) {
      return value.length <= 0;
    } else if (typeof value === "object") {
      return Object.keys(value).length <= 0;
    } else {
      return value === null || value.trim() === "";
    }
  },
  isNumber(value) {
    return Number.isNaN(value);
  },
  isURL(string) {
    var regex =
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return regex.test(string) ? true : false;
  },
  isPhone: (value) => {
    //let pattern = /^[+]?\d+$/;
    let pattern = /^\d+$/;
    return pattern.test(value);
  },
  isEmail: (email) => {
    const regx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(String(email).toLowerCase());
  },
  isPassword(password) {
    let pattern = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{7,}$/;
    return pattern.test(password);
  },
  hasSpecialCharacters(value) {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return pattern.test(value);
  },
};
module.exports = validate;
