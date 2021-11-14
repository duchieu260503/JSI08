// Bài 1:

// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số, in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.


// class PhanSo {
//     constructor(tuso,mauso) {
//         this.tuso = tuso
//         this.mauso = mauso
//     }


//     add(phanSo2) {
//         return new PhanSo(this.tuso*phanSo2.mauso + phanSo2.tuso*this.mauso,this.mauso*phanSo2.mauso)
//     }
//     mul(phanSo2) {
//         return new PhanSo(this.tuso*phanSo2.tuso, this.mauso*phanSo2.mauso)
//     }

//     sub(phanSo2) {
//         return new PhanSo(this.tuso*phanSo2.mauso - phanSo2.tuso*this.mauso,this.mauso*phanSo2.mauso)
//     }
//     div(phanSo2) {
//         return new PhanSo(this.tuso*phanSo2.mauso, this.mauso*phanSo2.tuso)
//     }
    // rutGon(){
    //     let c = Math.abs(this.tuso);
    //     let d = Math.abs(this.mauso);
    //     while(d != 0){
    //     let e = c%d;
    //     c = d;
    //     d = e;
    //     }
    //     return new PhanSo(this.tuso/c, this.mauso/c)
    // }
//     show() {
//       console.log(`${this.tuso}/${this.mauso}`)
//     }
// }

//   let phanSo1 = new PhanSo(6,9)
//   let phanSo2 = new PhanSo(5,4)
//   let result1 = phanSo1.mul(phanSo2)
//   let result = result1.rutGon()
//   result.show()

//   Bài 2:

//   Xây dựng lớp Candidate (Thí sinh) gồm các thuộc tính: mã, tên, ngày tháng năm sinh, điểm thi Toán, Văn, Anh và các phương thức cần thiết.

//   Xây dựng lớp TestCandidate để kiểm tra lớp trên:

//   – Nhập vào n thí sinh (n do người dùng nhập)

//   – In ra thông tin về các thí sinh có tổng điểm lớn hơn 15

class hocSinh{
    constructor(){
        this.student = [];
    }
    Input() {
		const num = parseInt(
			prompt("Số lượng học sinh: ")
		);
		for (let i = 0; i < num; i++) {
			let code = i+1;
			let name = prompt("Tên: ");
			let dob = prompt("Ngày tháng năm sinh: ");
			let toan = parseFloat(prompt("Điểm toán: "));
			let anh = parseFloat(prompt("Điểm tiếng Anh: "));
			let van = parseFloat(prompt("Điểm văn: "));
			let tongDiem = toan + anh + van;
			this.student.push({ code, name, dob, toan, anh, van, tongDiem });
		}
        for (let i = 0; i<num; i++){
            if (this.student[i].tongDiem > 15){
                console.log(this.student[i]);
            }
        }
    }
}
const a = new hocSinh();
console.log("Học sinh có số điểm lớn hơn 15: ");
a.Input();

// *Bài 3:
// Ngân hàng ABC muốn lưu trữ thông tin của mỗi tài khoản như sau:

// Mỗi tài khoản chứa các thông tin:

// Số tài khoản 
// Tên tài khoản 
// Số tiền trong tài khoản 
// Thiết kế lớp Account để lưu trữ các thông tin, lớp bao gồm các phương thức sau:

// Constructor
// Các phương thức get, set cho từng thuộc tính
// Phương thức toString để trả về chuỗi chứa toàn bộ thông tin tài khoản, yêu cầu định dạng tiền tệ.
// Thêm các thông tin sau vào lớp Account:

// Hằng số lãi suất có giá trị khởi tạo 0.035
// Constructor có 2 đối số: số tài khoản, tên tài khoản. Constructor này sẽ khởi tạo số tiền mặc định là 50
// Phương thức nạp tiền vào tài khoản: Lấy số tiền hiện tại trong tài khoản + số tiền nạp vào
// Phương thức rút tiền: Lấy số tiền hiện tại trong tài khoản – (số tiền muốn rút+phí rúttiền)
// Phương thức đáo hạn: Mỗi lần đến kỳ đáo hạn thì số tiền trong tài khoản = số tiền trong tài khoản + số tiền trong tài khoản * LAISUAT
// Phương thức chuyển khoản từ tài khoản này sang tài khoản khác
// Chú ý: Mỗi thao tác phải kiểm tra số tiền nạp, rút, chuyển có hợp lệ hay không? (VD: tiền nhập vào <0, tiền rút nhiều hơn tiền trong tài khoản thì thông báo không hợp lệ và yêu cầu nhập lại)

class Account {
    constructor() {
        this.LAISUAT = 0.035;
        this.users = []
    }
    createAccount() {

        let name = prompt("Tên tài khoản: ");
        let balance = parseInt(prompt("Số dư: "));

        const userData = {
            name,
            balance,
            tradeInDay: 0
        };
        this.users.push(userData);
        this.start(userData);
    }
    start(userData) {
        this.users.forEach(user => {
            {
                if (user.tradeInDay === 5) {
                    console.log(
                        "-----> Đáo hạn cái gì đó, check lại thông tin giùm cái <-----"
                    );
                    user.tradeInDay = 0;
                    user.balance = user.balance * this.LAISUAT;
                }
            }
        });
        console.log(`
			[0]. Xem thông tin
			[1]. Nạp xiền
			[2]. Chuyển xiền
			[3]. Rút xiền
		`);
        const choice = prompt("Chọn đê");

        switch (choice) {
            case "0":
                this.WatchAccount(userData);
                return false;
            case "1":
                this.Recharge(userData);
                return false;
            case "2":
                this.Transfers(userData);
                return false;
            case "3":
                this.Withdraw(userData);
                return false;
            default:
                console.error("Đm chọn ngu vl   ");
                console.log(this.users);
        }
    }
    WatchAccount(userData) {
        console.log(`
		----> Thông tin <-----
		1. Tên: ${userData.name}
		2. Số dư: ${userData.balance}
		3. Giao dịch trong ngày: ${userData.tradeInDay}
		`);
        this.users.forEach(user => {
            {
                user.tradeInDay += 1;
            }
        });

        this.start(userData);
    }

    Recharge(userData) {
        console.log("----> Nạp xiền 💴 <----");
        const moneyRecharge = parseInt(
            prompt("Nạp bao xiền? ")
        );
        if (moneyRecharge !== undefined || moneyRecharge !== null || moneyRecharge !== "" || moneyRecharge !== " ") {
            console.log(
                `----->Đã nạp thành công $${moneyRecharge} !! <-----`
            );
            this.users.forEach(user => {
                if (
                    user.password === userData.password &&
                    user.name === userData.name
                ) {
                    user.balance += moneyRecharge;
                    user.tradeInDay += 1;
                }
            });
            this.start(userData);
        }
        else {
            console.log(
                "-----> Có gì đó sai sai... <-----"
            );
        }
    }
    Transfers(userData) {
        const userTransfers = prompt(
            "Tên tài khoản nhận tiền? "
        );
        if (
            !userTransfers ||
            userTransfers.length === 0 ||
            userTransfers === "" ||
            userTransfers === " "
        ) {
            console.log("-----> Nhập lại đê <----");
        } else {
            let userTransfer = this.users.find(user => {
                if (user.name === userTransfers) {
                    return user;
                }
            });
            if (userTransfer) {
                let moneyTransfers = parseInt(
                    prompt("Chuyển nhiêu?")
                );
                while (moneyTransfers > userData.balance) {
                    console.log(
                        "-----> Mày nghĩ mày đủ tiền à...? <-----"
                    );
                    moneyTransfers = parseInt(
                        prompt("Chuyển nhiêu?")
                    );
                }

                userData.balance -= moneyTransfers;
                userTransfer.balance += moneyTransfers;
                userData.tradeInDay += 1;
                console.log(
                    `-----> Transfers $${moneyTransfers} successfully to ${userTransfer.name}!! Your money has increased to ${userData.balance} <------`
                );
                this.start(userData);

            }
        }
    }
    Withdraw(userData) {
        const moneyWithdraw = parseInt(
            prompt("Rút nhiêu?")
        );
        if (userData.balance < moneyWithdraw) {
            console.log(
                "-----> Đm lại ảo tưởng <-----"
            );
            this.Withdraw(userData);
        } else {
            userData.balance -= moneyWithdraw;
            userData.tradeInDay += 1;
            console.log("-----> Withdraw successfully!!!!!!!! <----");
            this.start(userData);
        }
    }
    
}
const Bai3 = new Account();
Bai3.createAccount();


