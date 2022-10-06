(function () {
    $('body').prepend("<div style=' background-color: rgba(0, 0, 0, 0.5);'> <style>"
        + ".popup-wrapper{display:none;position:fixed;z-index:99999;padding-top:10px;padding-bottom:30px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}@media only screen and (max-width:600px){.popup-content{margin:auto auto 30px;padding:20px 20px 70px;border:0 solid #888;width:40%;position:relative;min-height:84%}}@media only screen and (min-width:601px){.popup-content,.popup-content1{margin:auto auto 30px;padding:20px 20px 70px;border:0 solid #888;width:40%;position:relative;min-height:84%}}" +
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
        "        <div id='Registrationpopup' class='popup-wrapper' >" +
        "            <div class='popup-content'>" +
        "<iframe id='Registrationiframe' frameborder='0' allowtransparency='true' style='overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:fixed;top:0px;left:0px;right:0px;bottom:0px' height='100%' width='100%' ></iframe> </div></div></div>");
})();
function OpenAccessCodeRegPopup(popuptitle, IsEnableTncDeclaration = false, IsEnableMembersAddtion = false) {
    $('#Registrationiframe').attr('src', 'https://live.healthassure.in/buyPlan/AccessCodeRegistration.html?PopupTitle=' + popuptitle +  '&IsEnableTncDeclaration=' + IsEnableTncDeclaration + '&IsEnableMembersAddtion=' + IsEnableMembersAddtion );
    openmodal();
}

window.addEventListener('message', function (event) {
    if (event.data == 'closebuyplanpopup') {
        closemodal();
    }
    return;
});

function openmodal() {
    var modal = document.getElementById("Registrationpopup");
    modal.style.display = "block";
}

function closemodal() {
    var modal = document.getElementById("Registrationpopup");
    modal.style.display = "none";
}
