

if(window.location.href.includes("watch")){

$(".dxTwRb").each(function() {
    if ($(this).text().trim() === "V1") {
       $(".HeaderUyari").html(`<h4> ${$(this).parent().data("href")} </h4>`);
    }
});

}

if(window.location.href.includes("home")){
const countDisplay = document.querySelector(".HeaderUyari")


const length = document.querySelectorAll(".MaclariListele").length

countDisplay.innerHTML = `<h4> New Matches : ${length} </h4>  <h4> Before :  ${localStorage.getItem("length")} </h4>`

if(length != localStorage.getItem("length")){
localStorage.setItem("length", length)
}


}


if(window.location.href.includes("add-stream")){
const MaclarId = document.getElementById("MaclarID")

const category = document.getElementById("Kategori").options[document.getElementById("Kategori").selectedIndex].text;


if(MaclarId){
document.title = "AVAILABLE : "+" "+ category 
}


document.getElementById("YayinURL").addEventListener("click", function () {
  navigator.clipboard.readText().then(function (copiedText) {
    document.getElementById("YayinURL").value = copiedText
    document.querySelector('button').click()
  });
});
}



