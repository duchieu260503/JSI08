// Bài 1:
let arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
let sum = 0;
let soLeIndexChan = 0;
let indexSoNhoNhat = 0;
let soSoChinhPhuong = 0;
let soLonNhat = arrayNumber[0];
let soNhoNhat = arrayNumber[0];
function isPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
for (let i = 0; i < arrayNumber.length; i += 2) {
    if (arrayNumber[i] % 2 == 1) {
        sum += arrayNumber[i];
        soLeIndexChan++;
    }
}
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > soLonNhat) {
        soLonNhat = arrayNumber[i];
    }
}
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] < soNhoNhat) {
        soNhoNhat = arrayNumber[i];
    }
}
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] == soNhoNhat) {
        indexSoNhoNhat = i;
    }
}
for (let i = 0; i < arrayNumber.length; i++) {
    if (Number.isInteger(Math.sqrt(arrayNumber[i]) * Math.sqrt(arrayNumber[i])) == arrayNumber[i]) {
        soSoChinhPhuong++;
    }
}
console.log('TBC của các số lẻ index chẵn trong mảng là: ', sum / soLeIndexChan);
console.log('Số lớn nhất trong mảng là: ', soLonNhat);
console.log('Vị trí số nhỏ nhất trong mảng là: ', (indexSoNhoNhat + 1));
console.log('Số lượng số chính phương trong mảng là: ', soSoChinhPhuong);
console.log('Các số nguyên tố trong mảng là: ');
for (let i = 0; i < arrayNumber.length; i++) {
    if(isPrime(arrayNumber[i])){
        console.log(arrayNumber[i]);
    }
}
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] < 0) {
        arrayNumber[i] = 0;
    }
}
console.log('Mảng sau khi đã thay các số âm bằng số 0 là: ', arrayNumber);
for (let i = 0; i < 8; i++) {
    if (arrayNumber[i] !== 0){ //vô lý vl?? 
        removeElement(arrayNumber, 0); 
    }
}
console.log('Mảng sau khi đã xóa các số âm là: ', arrayNumber);

// //Bài 2
// function fits(x, y) {
//     if (Number.isInteger(y / x)) {
//       return true;
//     }
//     return false;
// } // ừ rồi có hàm rồi thì làm sao để dùng bâyh??
// let arrayNumbers = [];
// for (let i = 0; i<10; i++){
//     arrayNumbers[i] = prompt("Nhập phần tử thứ " + (i+1) + ":");
//     arrayNumbers[i] = parseInt(arrayNumbers[i]);
// }
// for (let i = 9; i>0; i--){
//     for (let j=0;j<i;j++){
//         if(arrayNumbers[i]<arrayNumbers[j]){
//             let temp = arrayNumbers[j];
//             arrayNumbers[j] = arrayNumbers[i];
//             arrayNumbers[i] = temp;
//         }
//     }
// }
// console.log("Dãy số xếp theo thứ tự tăng dần là: ", arrayNumbers);
// for (let i = 9; i>0; i--){
//     for (let j=0;j<i;j++){
//         if(arrayNumbers[i]>arrayNumbers[j]){
//             let temp = arrayNumbers[j];
//             arrayNumbers[j] = arrayNumbers[i];
//             arrayNumbers[i] = temp;
//         }
//     }
// }
// console.log("Dãy số xếp theo thứ tự giảm dần là: ", arrayNumbers);

// //Bài 3: 
// function isPrime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }
// let n = prompt('Nhập số n: ');
// for (let i = 1; i < n; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

