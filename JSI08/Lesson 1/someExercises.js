let stringNumbers = prompt("Nhập số :");
let number = parseInt(stringNumbers);
// let arrayNumbers = [];
// for (let i = 0; i<numbers; i++){
//     arrayNumbers[i] = prompt("Nhập phần tử thứ " + (i+1) + ":");
// }

// function sortAscending(array){
    
// }
// sortAscending(arrayNumbers);
for (let i = stringNumbers.length-1; i>0; i--){
    for (let j=0;j<i;j++){
        if(stringNumbers[i]>stringNumbers[j]){
            let temp = stringNumbers[j];
            stringNumbers[j] = stringNumbers[i];
            stringNumbers[i] = temp;
        }
    }
}
console.log(stringNumbers[1]);

console.log(stringNumbers);
console.log(typeof number);
console.log(typeof stringNumbers);

// console.log('Thứ tự từ lớn đến bé của các phần tử trong chuỗi là: ' + arrayNumbers);
// for (let i = numbers-1; i>0; i--){
//     for (let j=0;j<i;j++){
//         if(arrayNumbers[i]<arrayNumbers[j]){
//             let temp = arrayNumbers[j];
//             arrayNumbers[j] = arrayNumbers[i];
//             arrayNumbers[i] = temp;
//         }
//     }
// }
// console.log('Thứ tự từ bé đến lớn của các phần tử trong chuỗi là: ' + arrayNumbers);

// let x = [1,2,3,4,5]
// let num = +x.join("")