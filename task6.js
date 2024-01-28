function getSeason(month) {
  switch (true) {
    case month >= 3 && month <= 5:
      console.log("Its spring");
      break;
    case month >= 6 && month <= 8:
      console.log("Its summer");
      break;
    case month >= 9 && month <= 11:
      console.log("Its autumn");
      break;
    case month === 12 || (month <= 1 && month >= 2):
      console.log("Its winter");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

getSeason(12);

/*function getSeason(month) {
  switch (true) {
    case month >= 3 && month <= 5:
      console.log("It's spring");
      break;
    case month >= 6 && month <= 8:
      console.log("It's summer");
      break;
    case month >= 9 && month <= 11:
      console.log("It's autumn");
      break;
    case month === 12 || (month >= 1 && month <= 2):
      console.log("It's winter");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

getSeason(2); // Output: It's winter
 */
