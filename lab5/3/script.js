let requestURL = 'countries.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            ExtractData(JSON.parse(request.responseText));
        } };
    request.open("GET", requestURL, true);
    request.send();

    function ExtractData(data) {
        for (let i = 0; i < data.length; i++){
            document.write("<div class='container' style='font-size:20px; display: flex; padding-top: 5vh;'>")
            document.write("<div class='detail' style='height: auto; width: 60vw;'>")
            document.write("Name : " +"<b>"+ data[i].name +"</b>"+ "<br>")
            document.write("Capital : " + data[i].capital + "<br>")
            document.write("Population : " + data[i].population + "<br>")
            document.write("Region : " + data[i].region + "<br>")
            document.write("Location : " + data[i].latlng[0] + " " + data[i].latlng[1] + "<br>")
            document.write("Borders : ")
            for (let j = 0; j < data[i].borders.length; j++){
                document.write(data[i].borders[j] + " ")
            }
            document.write("<br>")
            document.write("</div>")
            document.write("<div class='pic'>")
            document.write("<img style='height: 200px;border: 0.1px solid black;' src=\""+ data[i].flag + "\">")
            document.write("</div>")
            document.write("<br><br>")
            document.write("</div>")
        }

    }
