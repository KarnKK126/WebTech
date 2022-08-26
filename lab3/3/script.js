var images1= [];
images1[0] = "url(http://10.0.15.20/312lab3/images/1.png)";
images1[1] = "url(http://10.0.15.20/312lab3/images/3.png)";
images1[2] = "url(http://10.0.15.20/312lab3/images/4.png)";
images1[3] = "url(http://10.0.15.20/312lab3/images/2.png)";

var images2= [];
images2[0] = "url(http://10.0.15.20/312lab3/images/2.png)";
images2[1] = "url(http://10.0.15.20/312lab3/images/1.png)";
images2[2] = "url(http://10.0.15.20/312lab3/images/3.png)";
images2[3] = "url(http://10.0.15.20/312lab3/images/4.png)";

var images3= [];
images3[0] = "url(http://10.0.15.20/312lab3/images/3.png)";
images3[1] = "url(http://10.0.15.20/312lab3/images/4.png)";
images3[2] = "url(http://10.0.15.20/312lab3/images/2.png)";
images3[3] = "url(http://10.0.15.20/312lab3/images/1.png)";

var images4= [];
images4[0] = "url(http://10.0.15.20/312lab3/images/4.png)";
images4[1] = "url(http://10.0.15.20/312lab3/images/2.png)";
images4[2] = "url(http://10.0.15.20/312lab3/images/1.png)";
images4[3] = "url(http://10.0.15.20/312lab3/images/3.png)";


const box = document.getElementById("picture")
const box1 = document.getElementById("picture1")
const box2 = document.getElementById("picture2")
const box3  = document.getElementById("picture3")
box.style.backgroundImage = images1[0]
box1.style.backgroundImage = images2[0]
box2.style.backgroundImage = images3[0]
box3.style.backgroundImage = images4[0]
// box2.style.backgroundImage = images3[2]
// box3.style.backgroundImage = images4[3]
var i = 0, j = 0, k = 0, g =0
function OnClick() {
    const box = document.getElementById("picture")
    box.style.backgroundImage = images1[i]
    const box1 = document.getElementById("picture1")
    box1.style.backgroundImage = images2[j]
    const box2 = document.getElementById("picture2")
    box2.style.backgroundImage = images3[k]
    const box3 = document.getElementById("picture3")
    box3.style.backgroundImage = images4[g]
    if(i,j,k,g < images1.length-1){
        i = i+1
        j = j+1
        k = k+1
        g = g+1

    }
    else{
        i = 0
        j = 0
        k = 0
        g = 0
    }
}
