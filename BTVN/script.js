// // Bài 1:
// let arr1 = [1,2,3,5];
// let arr2 = [];
// for (let i = 0; i<arr1.length; i++) {     
//     arr2.push(arr1[i]);
// }
// let arr3 = [... arr1];
// console.log(arr2);
// console.log(arr3);

// // Bài 2:
// let arrA = ['Hello', 'Xin chào'];
// let arrB = ['Bonjour', 'Olá'];
// let waysToSayHello1 = [];
// for (let i = 0; i<2; i++){
//     waysToSayHello1.push(arrA[i],arrB[i]);
// }
// let waysToSayHello2 = [...arrA, ...arrB];
// console.log(waysToSayHello1);
// console.log(waysToSayHello2);

// // Bài 3:
// let arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// let arrSquare = arrX.map(number => number * number);
// let arrOdds = arrX.filter(number => number % 2 !== 0);
// console.log(arrSquare);
// console.log(arrOdds);

// // Bài 4:
// function filterRange(arr, a, b){
//     let filteredArr = [];
// 	if (arr.length > 4 && 0 <= a < arr.length && 0 <= b < arr.length){
//         for (let i = a; i<b; i++){
//             filteredArr.push(arr[i]);
//         }
// 	}
//     console.log(filteredArr);
// }
// filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 6);

// // Bài 5:
// function filterRange(arr, a, b){
//     let filteredArr = [];
//     let sorted = [];
// 	if (arr.length > 4 && 0 <= a < arr.length && 0 <= b < arr.length){
//         for (let i = 0; i<arr.length; i++){
//             if(arr[i]>a && arr[i]<b){
//                 filteredArr.push(arr[i]);
//             }
//             else{
//                 sorted.push(arr[i]);
//             }
//         }
//         for (let i = 0; i<sorted.length; i++){
//             for (let j = 0; j<arr.length; j++){
//                 if(sorted[i]==arr[j]){
//                     arr.splice(j,1);
//                 }
//             }
//         }
// 	}
//     console.log(arr);
//     console.log(filteredArr);
// }
// filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 6);

// Bài 6:
let student = [
	{
		name: "Duong",
		age: 11,
		hobbies: ["video game", "sleep", "learn"]
	},
	{
		name: "Dong",
		age: 12,
		hobbies: ["video game", "sick", "study"]
	},
	{
		name: "Minh",
		age: 13,
		hobbies: ["video game", "sick", "learn"]
	},
	{
		name: "Thanh",
		age: 9,
		hobbies: ["play game", "sleep", "learn"]
	},
	{
		name: "Hung",
		age: 11,
		hobbies: ["play game", "sick", "study"]
	}
];

// function findNameFromAge(arr, age){
//     let newStudent1 = arr.filter((target) => target.age == age);
//     console.log(newStudent1);
// }

// function findNameFromHobby(arr, hobby) {
//     let targetArray = [];
//     arr.filter(target => {
// 		target.hobbies.forEach(hbs => {
// 			if (hbs === hobby)
// 				targetArray.push({ name: target.name, hobbies: target.hobbies });
// 		});
//     })
//     console.log(targetArray);
// }
// findNameFromHobby(student, "study");

// function doHoiThichHoc(arr){
//     let studyArray = [];
//     arr.filter((target) => target.hobbies.forEach(hbs => {
//         if (hbs === "study"){
//             studyArray.push(target);
//         }
//     }));
//     console.log(studyArray);
// }
// doHoiThichHoc(student);

student.map(target => {
    if (target.age == 11){
        return (target.age = 15);
    }
});
console.log(student);


