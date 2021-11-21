/*Một đơn vị sản xuất gồm có các cán bộ là công nhân, kỹ sư, nhân viên. 
	Mỗi cán bộ cần quản lý các dữ liệu: Họ tên, tuổi, giới tính(name, nữ, khác), địa chỉ.
	Cấp công nhân sẽ có thêm các thuộc tính riêng: Bậc (1 đến 10).
	Cấp kỹ sư có thuộc tính riêng: Nghành đào tạo.
	Các nhân viên có thuộc tính riêng: công việc.
	Yêu cầu 1: Xây dựng các lớp CongNhan, KySu, NhanVien kế thừa từ lớp CanBo.
	Yêu cầu 2: Xây dựng lớp QLCB(quản lý cán bộ) cài đặt các phương thức thực hiện các chức năng sau:
		Thêm mới cán bộ.
		Tìm kiếm theo họ tên.
		Hiện thị thông tin về danh sách các cán bộ.*/

class CanBo {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
}

class CongNhan extends CanBo { 
    constructor(name, age, gender, address, rank) {
        super(name, age, gender, address, rank);
        this.rank = rank;
    }
}

class KySu extends CanBo {
    constructor(name, age, gender, address, field) {
        super(name, age, gender, address, field);
        this.field = field;
    }
}

class NhanVien extends CanBo {
    constructor(name, age, gender, address, job) {
        super(name, age, gender, address, job);
        this.job = job;
    }
}

class QLCB {
	constructor() {
		this.data = [{
            name: "Hiếu",
            age: 18,
            gender: "Nam",
            type: "Công nhân",
            rank: "5/10"
        },
        {
            name: "Huy",
            age: 16,
            gender: "Nam",
            type: "Kỹ sư",
            field: "Ăn hại"
        },
        {
            name: "Hà",
            age: 20,
            gender: "Nữ",
            type: "Nhân viên",
            job: "Bà chằn mắng chửi học sinh"
        }];
		this.canBo = null;
	}

	Action() {
		console.log(`Lựa chọn:
            1. Thêm cán bộ
            2. Tìm cán bộ
            3. Hiện danh sách các cán bộ có trong hệ thống
        `);
		console.log("Nhập phím bất kỳ khác 1,2,3 để thoát");
		const choose = prompt("Lựa chọn: ");
		switch (choose) {
			case "1":
				this.Add();
				return false;
			case "2":
				this.Find();
				return false;
			case "3":
				this.ShowList();
				return false;
			default:
				console.log("Đã thoát chương trình.");
                return true;
		}
	}
    String(type) {
		switch (type) {
			case 1:
				const step = Number(
					prompt("Bậc của Công nhân (từ 1 -> 10): ")
				);
				const CongNhanObj = new CongNhan(
					this.canBo.name,
					this.canBo.age,
					this.canBo.gender,
					this.canBo.address,
                    // this.canBo.type,
					`${step}/10`
				);
				const objCN = Object.assign({}, CongNhanObj);
				this.data.push(objCN);
				console.log("Đã thêm cán bộ thành công !!!");
				this.Action();
				return false;
			case 2:
				const field = prompt("Ngành của kỹ sư: ");
				const KySuObj = new KySu(
					this.canBo.name,
					this.canBo.age,
					this.canBo.gender,
					this.canBo.address,
                    // this.canBo.type,
					field
				);
				const objKS = Object.assign({}, KySuObj);
				this.data.push(objKS);
				console.log("Đã thêm cán bộ thành công !!!");
				this.Action();
				return false;
			case 3:
				const job = prompt("Công việc của nhân viên: ");
				const NhanVienObj = new NhanVien(
					this.canBo.name,
					this.canBo.age,
					this.canBo.gender,
					this.canBo.address,
                    // this.canBo.type,
					job
				);
				const objNV = Object.assign({}, NhanVienObj);
				this.data.push(objNV);
				console.log("Đã thêm cán bộ thành công !!!");
				this.Action();
				return false;
			default:
				console.log("Nhập sai!");
				this.Action();
				return false;
		}
	}
    Add() {
		let name = prompt("Tên cán bộ: ");
		let age = parseInt(prompt("Tuổi cán bộ: "));
		let gender = prompt("Giới tính của cán bộ (Nam/Nữ): ");
		let address = prompt("Địa chỉ của cán bộ: ");

		this.canBo = { name, age, gender, address };

		console.log(`
            Chức vụ?
            1. Công nhân
            2. Kỹ sư
            3. Nhân viên
        `);
		const type = parseInt(prompt("Nhập số tương ứng: "));
		this.String(type);
	}
    Find() {
		const find = prompt("Nhập tên cán bộ cần tìm: ");
		const arrFind = this.data.filter(item => item.name === find);
		if (arrFind.length > 0){
            console.log(arrFind);
        } 
		else{
            console.log("Không tìm thấy!");
        } 
		this.Action();
	}

	ShowList() {
		console.log(this.data);
		this.Action();
	}
}
const a = new QLCB();
a.Action();


