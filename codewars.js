// function spinWords(string) {
//   const words = string.split(" ");
//   const reversedWords = words.map((word) => {
//     if (word.length >= 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   });
//   return reversedWords.join(" ");
// }

// const result = spinWords(
//   "Це речення містить слова з п'ятьма або більше літерами"
// );
// console.log(result); // Виведе "Це еніняртс ітнамсить овалс оз я'ьмаім ьіб ал ьтсерим"

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(evenOrOdd(13));

// const binaryArrayToNumber = (arr) => {
//   const arrString = arr.join("");
//   const arrNumber = parseInt(arrString, 2);
//   return arrNumber;
// };

// console.log(binaryArrayToNumber([1, 1, 1, 1]));

// function spinWords(string) {
//   const strSplit = string.split(" ");
//   const reversedWords = strSplit.map((word) => {
//     if (word.length > 5) {
//       return word.split("").reverse().join("");
//     } else {
//       return word;
//     }
//   });
//   return reversedWords.join(" ");
// }

// console.log(spinWords("Hey fellow warriors"));

// function neutralise(s1, s2) {
//   let result = "";
//   for (i = 0; i < s1.length; i++) {
//     const char1 = s1[i];
//     const char2 = s2[i];
//     if (char1 === char2) {
//       result += char1;
//     } else {
//       result += 0;
//     }
//   }
//   return result;
// }

// console.log(neutralise("-", "-"));
// fetch("<https://jsonplaceholder.typicode.com/users>")
//   .then((response) => {
//     // Response handling
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name"
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

const scrollUpButton = document.querySelector(".scroll-up-button");

scrollUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 230) {
    scrollUpButton.classList.add("active");
  } else {
    scrollUpButton.classList.remove("active");
  }
});
