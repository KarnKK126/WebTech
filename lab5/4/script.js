let requestURL = 'movies.json';
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200){
            ExtractData(JSON.parse(request.responseText));
        } };
    request.open("GET", requestURL, true);
    request.send();

    function ExtractData(data) {
        document.write("<div class='container' style='width: 100%; height: auto; display: flex; padding: 20px;margin-top:100px;'>")
        for (i = 0; i < data.movies.showing.length; i++){
            document.write("<div class='movie' style='width: 250px;height: 400px; border: 0.5px solid black;margin-left: 20px;text-align: center;'>")
            document.write("<img style='position: relative;top:-20%;height: 250px; width:180px;' src=\""+ data.movies.showing[i].poster + "\"><br>")
            document.write("<div class='detail' style='position:relative;'>")
            document.write("<b>"+data.movies.showing[i].title_th+"<b><br><br>")
            document.write("<div style='font-size:10px;opacity:0.5;'>release date "+data.movies.showing[i].releasedate+"</div>")
            document.write("</div>")
            document.write("<button type='button' style='position:relative;top:5%;width:150px;height:30px;background-color:#9FC9F3;color:white;border:0.1px solid #9FC9F3;border-radius:5px;'>เช็ครอบภาพยนต์</button>")
            document.write("</div>")
        }
        document.write("</div>")

        document.write("<div class='container' style='width: 100%; height: auto; display: flex; padding: 20px;margin-top:100px;'>")
        for (i = 0; i < data.movies.comingsoon.length; i++){
            document.write("<div class='movie' style='width: 250px;height: 400px; border: 0.5px solid black;margin-left: 20px;text-align: center;'>")
            document.write("<img style='position: relative;top:-20%;height: 250px; width:180px;' src=\""+ data.movies.comingsoon[i].poster + "\"><br>")
            document.write("<div class='detail' style='position:relative;'>")
            document.write("<b>"+data.movies.comingsoon[i].title_th+"<b><br><br>")
            document.write("<div style='font-size:10px;opacity:0.5;'>release date "+data.movies.showing[i].releasedate+"</div>")
            document.write("</div>")
            document.write("<button type='button' style='position:relative;top:5%;width:150px;height:30px;background-color:#9FC9F3;color:white;border:0.1px solid #9FC9F3;border-radius:5px;'>เช็ครอบภาพยนต์</button>")
            document.write("</div>")
        }
        document.write("</div>")
    }
