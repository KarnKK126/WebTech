function change(){
    let name = document.getElementById("Name").value
    let phone = document.getElementById("Phone").value
    let mail = document.getElementById("Email").value
    let company = document.getElementById("company").value
    document.getElementById("cardname").innerHTML = name
    document.getElementById("cardphone").innerHTML = phone
    document.getElementById("cardmail").innerHTML = mail
    document.getElementById("cardcompany").innerHTML = company
}
