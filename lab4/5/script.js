function addList(clicked_id) {
    let list = document.getElementById("list");
    let addOrder = document.createElement("li");
    let orderAtt = document.createAttribute("class");
    orderAtt.value = "list-group-item";
    addOrder.setAttributeNode(orderAtt);
    if (clicked_id == "poom1") {
        let orderText = document.createTextNode("ซาชิมิแซลม่อน");
        addOrder.appendChild(orderText);
    } else if (clicked_id == "poom2") {
        let orderText = document.createTextNode("กุ้งอบวุ้นเส้น");
        addOrder.appendChild(orderText);
    } else if (clicked_id == "poom3") {
        let orderText = document.createTextNode("ชานมไข่มุก");
        addOrder.appendChild(orderText);
    }
    let addOne = document.createElement("div");
    let oneAtt = document.createAttribute("class");
    oneAtt.value = "float-right";
    addOne.setAttributeNode(oneAtt);
    addOne.innerHTML = "x1";
    addOrder.appendChild(addOne);
    list.appendChild(addOrder);
}
