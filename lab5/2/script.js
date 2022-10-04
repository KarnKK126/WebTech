let requestURL = 'questionData.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            ExtractData(JSON.parse(request.responseText));
        } };
    request.open("GET", requestURL, true);
    request.send();

    function ExtractData(data) {
        document.write("<h1><b>Quiz1</b></h1>")
        for (let i = 0; i < data.length; i++){
            document.write((i+1) + ") " + data[i].question + "<br>");
            document.write("<input name=\"dog" + i + "\" type=\"radio\">" + data[i].answers.a + "<br>")
            document.write("<input name=\"dog" + i + "\" type=\"radio\">" + data[i].answers.b + "<br>")
            document.write("<input name=\"dog" + i + "\" type=\"radio\">" + data[i].answers.c + "<br><br>")
        }
    }
