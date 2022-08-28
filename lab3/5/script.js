function change(){
    let name = document.getElementById("Name").value
    let phone = document.getElementById("Phone").value
    let mail = document.getElementById("Email").value
    let company = document.getElementById("company").value
    if (name.length < 1){
        alert('Fullname can\'t be empty');
    } else if (phone.length < 1){
        alert('Phone number can\'t be empty');
    } else if (mail.length < 1){
        alert('Email can\'t be empty');
    } else if (company.length < 1){
        alert('Company name can\'t be empty');
    } else {
        document.getElementById("cardname").innerHTML = name
        document.getElementById("cardphone").innerHTML = phone
        document.getElementById("cardmail").innerHTML = mail
        document.getElementById("cardcompany").innerHTML = company
    }
}
