(function () {
    $('body').prepend("<div style=' background-color: rgba(0, 0, 0, 0.5);'> <style>"
        +".popup-wrapper{display:none;position:fixed;z-index:99999;padding-top:10px;padding-bottom:30px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}@media only screen and (max-width:600px){.popup-content{margin:auto auto 30px;padding:20px 20px 70px;border:0 solid #888;width:40%;position:relative;min-height:84%}}@media only screen and (min-width:601px){.popup-content,.popup-content1{margin:auto auto 30px;padding:20px 20px 70px;border:0 solid #888;width:40%;position:relative;min-height:84%}}"+
        "            @keyframes animatetop {" +
        "                from {" +
        "                    top: -300px;" +
        "                    opacity: 0" +
        "                }" +
        "" +
        "                to {" +
        "                    top: 0;" +
        "                    opacity: 1" +
        "                }" +
        "            }" +
        "        </style>" +
        "        <div id='buyplanpopup' class='popup-wrapper' >" +
        "            <div class='popup-content'>" +
        "<iframe id='BuyPlaniframe' frameborder='0' allowtransparency='true' style='overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:fixed;top:0px;left:0px;right:0px;bottom:0px' height='100%' width='100%' ></iframe> </div></div></div>");
})();
function getUrlVars1(url = window.location.href) {
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var Vars1 = getUrlVars1();
function OpenBuyPlanPopup(popuptitle, PlanCode, CouponCode, IsUserTracker = false, IsVarifyEmail = false, EmailDomain = "") {
    $('#BuyPlaniframe').attr('src', 'https://live.healthassure.in/buyPlan/buyPlan.html?PopupTitle=' + popuptitle + '&PlanCode=' + PlanCode + '&CouponCode=' + CouponCode + '&IsUserTracker=' + IsUserTracker + '&utm_source=' + Vars1["utm_source"] + '&utm_medium=' + Vars1["utm_medium"] + '&utm_campaign=' + Vars1["utm_campaign"] + '&utm_term=' + Vars1['utm_term'] + '&utm_content=' + Vars1['utm_content'] + '&IsVarifyEmail=' + IsVarifyEmail + '&EmailDomain=' + EmailDomain);
    openmodal();
}

window.addEventListener('message', function (event) {
    if (event.data == 'closebuyplanpopup') {
        closemodal();
    }
    return;
});

function openmodal() {
    var modal = document.getElementById("buyplanpopup");
    modal.style.display = "block";
}

function closemodal() {
    var modal = document.getElementById("buyplanpopup");
    modal.style.display = "none";
}
