let requestURL = 'question.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function ExtractData(data) {
    for (let i = 0; i < data.length; i++) {
        let num = document.createTextNode(i + 1)
        let ques = document.createTextNode(data[i].question)
        let choice_a = document.createTextNode(data[i].answers.a)
        let choice_b = document.createTextNode(data[i].answers.b)
        let choice_c = document.createTextNode(data[i].answers.c)
        let choice_correct = document.createTextNode(data[i].answers.correct)

        let table = document.getElementById("table")
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")

        td1.appendChild(num)
        td2.appendChild(ques)
        td3.appendChild(choice_a)
        td4.appendChild(choice_b)
        td5.appendChild(choice_c)
        td6.appendChild(choice_correct)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)

        table.appendChild(tr)
    }
}

let i = 4
function newquestion() {
    let question = document.getElementById("textquestion").value
    let textchoice1 = document.getElementById("textchoice1").value
    let textchoice2 = document.getElementById("textchoice2").value
    let textchoice3 = document.getElementById("textchoice3").value

    let choice_ans = ""
    let choice1 = document.getElementById("choice1")
    let choice2 = document.getElementById("choice2")
    let choice3 = document.getElementById("choice3")

    if (choice1.checked) {
        choice_ans = document.createTextNode("a")
    }
    else if (choice2.checked) {
        choice_ans = document.createTextNode("b")
    }
    else {
        choice_ans = document.createTextNode("c")
    }

    let table = document.getElementById("table")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    td1.appendChild(document.createTextNode(i))
    td2.appendChild(document.createTextNode(question))
    td3.appendChild(document.createTextNode(textchoice1))
    td4.appendChild(document.createTextNode(textchoice2))
    td5.appendChild(document.createTextNode(textchoice3))
    td6.appendChild(choice_ans)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)

    table.appendChild(tr)
    i++
}
