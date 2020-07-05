$(document).ready(function(){
    fillResume();
});


function fillResume() {
    if (this.resumeAcquired) {
    return;
    }
    const url = "https://docs.google.com/document/d/e/2PACX-1vQj-kw7iT65uYiButGTetIF_5_PFK28O3_11qOpQEO8knHoL1G20St8-SgUAh9G3y2xxzvB7t63F6eT/pub?embedded=true";
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == "200") {
        let googleDocElm = document.getElementById("google-doc");
        googleDocElm.innerHTML = request.responseText;
    }
    };
    request.send(null);
}