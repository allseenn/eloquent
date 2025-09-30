function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = (n-(n%base))/10;
  } while (n > 0);
  return sign + result;
}
debugger
console.log(numberToString(2318, 10));
