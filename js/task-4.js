// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив обєктів користувачів,
// другий параметр gender — рядок, що зберігає стать.

// Функція має використовувати ланцюжок виклику методів
// та повертати загальний баланс користувачів (властивість balance),
// стать яких (властивість gender) збігається зі значенням параметра gender.

function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

