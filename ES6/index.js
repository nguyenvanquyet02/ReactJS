//////////////// arrow function
{
  //desc...
  function myFunc(log) {
    console.log(log);
  }
  //   myFunc("this is a normal function!");

  // expression function
  //   const myName = myFunc("Nguyen Van Quyet");

  //arrow function remove function key

  const sum = (a, b) => a + b;
  //   console.log("sum: ", sum(2, 3));

  (() => {
    // console.log("Arrow function");
  })();

  const message = (log) => console.log(log);

  //   message("1 tham so nhan");
}
////////////////// Enhanced object literals
/**
 * dinh nghia key value cho object
 * dinh nghia method cho object
 * dinh nghia key cho obj duoi dang bien
 */
{
  var name = "Javascript";
  var price = 1000;
  var course = {
    //dinh nghia key value cho object
    name,
    price,
    //dinh nghia method cho object
    getName() {
      return this.name;
    },
  };
  //   console.log(course);

  //dinh nghia key cho obj duoi dang bien
  var fieldName = "name";
  var fieldPrice = "price";
  var infor = {
    [fieldName]: "Javascript",
    [fieldPrice]: 2000,
  };
  //   console.log(infor);
}

////////////////Destructuring, Rest
// sd voi Destructuring
// sd voi rest parameters
{
  var array = ["js", "php", "ruby"];
  var [a, , c] = array;
  //   console.log(a);
  //   console.log(c);
  //rest
  // sd voi Destructuring se la toan tu con lai
  var [a, ...rest] = array;
  //   console.log(a);
  //   console.log(rest); // con lai

  var obj = {
    name: "js",
    price: 1000,
    level: "basic",
    children: {
      name: "reactjs",
    },
    description: "description value",
  };
  // phai dung key trong obj
  var {
    name: parentName, // doi ten key
    children: { name },
    description = "default desc", // dinh nghia gia tri mac dinh cho key khong ton tao trong obj
  } = obj;
  //   console.log(parentName);
  //   console.log(name);
  //   console.log(description);

  // rest parameters
  function logger(...params) {
    console.log(params);
  }
  //   logger(1, 2, 3, 4, 5);

  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  function log([a, ...rest]) {
    console.log(a);
    console.log(rest);
  }
  //   log(arr);
}

////////Spread operator: toan tu giai ... bo di dau ngoac phia truoc arr or obj
{
  var arr1 = ["js", "ruby", "php"];
  var arr2 = ["reactjs", "vuejs"];
  var arr3 = [...arr1, ...arr2];
  //   console.log(arr3);
  var arr = [1, 2, 3, 4, 5];
  function logger(...rest) {
    // rest
    for (var i = 0; i < rest.length; i++) {
      console.log(rest[i]);
    }
  }
  // logger(...arr); // spread
}
//// JS modules
import logger from "./logger/index.js";
import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from "./constants.js";
import * as constants from "./constants.js"; // lay ra tat ca export khong phai default
// console.log(constants); // obj
// logger("this is a message!", TYPE_LOG);
// logger("this is a message!", TYPE_WARN);
// logger("this is a message!", TYPE_ERROR);
