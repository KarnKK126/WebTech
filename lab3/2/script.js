

function validateForm() {
    let card = document.forms.myform.IDcard.value;
    let gender = document.forms.myform.Gender.value;
    let fname = document.forms.myform.Name.value;
    let lname = document.forms.myform.Lastname.value;
    let address1 = document.forms.myform.Address.value;
    let address2 = document.forms.myform.Address1.value;
    let address3 = document.forms.myform.Address2.value;
    let city = document.forms.myform.city.value;
    let postnum = document.forms.myform.post.value;
    if (card.length != 13 || !checknum(card)) {
        alert("โปรดใส่เลขบัตรประชาชน 13 หลัก");
    }else if (gender == "000"){
        alert("โปรดเลือกเพศ")
    }else if ((fname.length < 2 && fname.length > 20) || !checkstring(fname)){
        alert("โปรดใส่ชื่อให้ถูกต้อง"+fname)
    }else if ((lname.length < 2 && lname.length > 20) || !checkstring(lname)){
        alert("โปรดใส่นามสกุลให้ถูกต้อง")
    }else if (address1.length < 5){
        alert("ใส่ที่อยู่ให้ถูกต้อง")
    }else if ((address2.length < 2) || !checkstring(address2)){
        alert("ใส่ตำบล/แขวงให้ถูกต้อง")
    }else if ((address3.length < 2) || !checkstring(address3)){
        alert("ใส่อำเภอ/เขตให้ถูกต้อง")
    }else if (city == "000"){
        alert("กรุณาเลือกจังหวัด")
    }else if ((post.length == 5) || !checknum(post)){
        alert("กรุณาใส่รหัสไปรษณีย์ให้ถูกต้อง")
    }
}

function checknum(string){
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])){
            return false
        }
    }
    return true
}

function checkstring(string){
    for (let i = 0; i < string.length; i++) {
        if (string[i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]){
            return false
        }
    }
    return true
}
