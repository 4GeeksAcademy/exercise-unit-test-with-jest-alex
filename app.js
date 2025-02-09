const sum = (a,b) => {
      return a + b
 }

 //Just a console log for ourselves
  console.log(sum(7,3))
 // Objeto con las tasas de conversión
  const oneEuroIs = {
      "JPY": 156.5, // yen japonés
      "USD": 1.07,  // dólar estadounidense
      "GBP": 0.87,  // libra esterlina
  };
 
  // Función para convertir de dólares a yenes
  const fromDollarToYen = (dollars) => {
      return dollars * (oneEuroIs.JPY / oneEuroIs.USD);
  }
 
  // Función para convertir de euros a dólares
  const fromEuroToDollar = (euros) => {
      return euros * oneEuroIs.USD;
  }
 
 // Función para convertir de yenes a libras esterlinas
  const fromYenToPound = (yens) => {
      return yens * (oneEuroIs.GBP / oneEuroIs.JPY);
  }
 
 
  //Export the function to be used on other files 
 //(similar to the keyword "export" when using webpack)
  module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
















// // // This is my function that sums two numbers
// const sum = (a,b) => {
//     return a + b
// }

// // Just a console log for ourselves
// console.log(sum(7,3))
// // Objeto con las tasas de conversión
// const oneEuroIs = {
//     "JPY": 156.5, // yen japonés
//     "USD": 1.07,  // dólar estadounidense
//     "GBP": 0.87,  // libra esterlina
// };

// // Función para convertir de dólares a yenes
// const fromDollarToYen = (dollars) => {
//     return dollars * (oneEuroIs.JPY / oneEuroIs.USD);
// }

// // Función para convertir de euros a dólares
// const fromEuroToDollar = (euros) => {
//     return euros * oneEuroIs.USD;
// }

// // Función para convertir de yenes a libras esterlinas
// const fromYenToPound = (yens) => {
//     return yens * (oneEuroIs.GBP / oneEuroIs.JPY);
// }


// // Export the function to be used on other files 
// // (similar to the keyword "export" when using webpack)
// module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };