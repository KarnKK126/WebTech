let requestURL = 'superheroes.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            ExtractData(JSON.parse(request.responseText));
        } };
    request.open("GET", requestURL, true);
    request.send();

    function ExtractData(data) {
        document.write(data.squadName + '<br>');
        document.write(data.homeTown + '<br>');
        document.write(data.secretBase + '<br>');

        document.write("<br><br><br><br>")
        // การเข้าไปในmember
        for (let member of data.members) {
            document.write( "- " + member.name + ", " + member.age + "<br>")
            document.write("<ol>")
            for (let power of member.powers){
                document.write("<li>" + power + "</li>" + "<br>")
            }
            document.write("</ol>")
        }
    }
