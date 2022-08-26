let check = true;
function start(){
    let chart1 = document.getElementById("chart1")
    let chart2 = document.getElementById("chart2")
    let chart3 = document.getElementById("chart3")
    let chart4 = document.getElementById("chart4")
    let chart5 = document.getElementById("chart5")
    if (check){
        chart1.style.width = "500px"
        chart2.style.width = "900px"
        chart3.style.width = "300px"
        chart4.style.width = "1000px"
        chart5.style.width = "850px"
        check = false;
    }else{
        chart1.style.width = "100px"
        chart2.style.width = "100px"
        chart3.style.width = "100px"
        chart4.style.width = "100px"
        chart5.style.width = "100px"
        check = true
    }
}
