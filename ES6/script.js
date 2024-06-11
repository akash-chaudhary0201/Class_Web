// let num = 2;

// let prom = new Promise((res, rej) => {
//   if (num == 2) {
//     res("Promise Resolved");
//   } else {
//     rej("Promise Rejected");
//   }
// });

// We use then keyword to handle  resolved promise and we use catch keyword to handle the rejection of promise :-
// prom
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

// You have an array named as skills, now you have to search a value in this array if this value is present then resovlve it and if not then reject it.

// let skills = ["HTML", "CSS", "JS", "Node"];
// Search NODE

// let eligible = new Promise((res, rej) => {
//   if (skills.includes("Node")) {
//     res("You are eligible");
//   } else {
//     rej("Bhai padhle phele");
//   }
// });

// eligible
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

// a promise in function

// let checkNum = (num, name) => {
//   return new Promise((res, rej) => {
//     if (num % 2 == 0) {
//       res(`${num} is an even number ${name}`);
//     } else {
//       rej(num + " is not a even number " + name);
//     }
//   });
// };

// checkNum(10, "Tanu")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });
// let p1 = new Promise((res, rej) => {
//   res("Resolved 1");
// });

// let p2 = new Promise((res, rej) => {
//   rej("Resolved 2");
// });

// let p3 = new Promise((res, rej) => {
//   rej("Resolved 3");
// });

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("One of the promise is rejected");
//   });

// Promise.any([p1, p2, p3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("One of the promise is rejected");
//   });
