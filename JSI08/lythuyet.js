// class Human {
//   constructor(name, age, gender) {
//     // Các input do người dùng nhập vào
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//     say() {
//     // console.log(this)
//     console.log("Hello my name is " + this.name);
//   }
// }

// let human1 = new Human("Quân", 21, "nam");
// // student1.say();

// class Student extends Human {
//     constructor(name, age, gender,mssv,school) {
//         super(name, age, gender)
//         this.mssv = mssv;
//         this.school = school;
//     }

//     // Override
//     say() {
//         // super.say();
//         console.log("Bạn là nhất")
//     }
// }

// let student1 = new Student("Quân", 21, "nam",7234,"HUST")

// student1.say()


// Bài 1:

// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số, in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.


class PhanSo {
    constructor(tuso,mauso) {
        this.tuso = tuso
        this.mauso = mauso
    }
  
  
    add(phanSo2) {
        return new PhanSo(this.tuso*phanSo2.mauso + phanSo2.tuso*this.mauso,this.mauso*phanSo2.mauso)
    }
  
    mul() {}
  
    sub() {
  
    }
    div() {
  
    }
    show() {
      console.log(`${this.tuso}/${this.mauso}`)
    }
  }
  
  let phanso1 = new PhanSo(1,5)
  let phanSo2 = new PhanSo(2,7)
  let result = phanso1.add(phanSo2)
  result.show()