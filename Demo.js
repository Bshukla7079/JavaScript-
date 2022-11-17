// console.log("this page is for parctice javascript");

// 'input' is an array or not.

is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));

  //clone an array
  