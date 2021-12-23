(function () {
    $('body').prepend("<div style=' background-color: rgba(0, 0, 0, 0.5);'> <style>" +
        "            .modal-body {" +
        "                padding: 2px 16px;" +
        "            }" +
        "            .modal-content {" +
        "                position: relative;" +
        "                background-color: rgba(0, 0, 0, 0.5);" +
        "                margin: auto;" +
        "                padding: 0;" +
        "                border: 0px solid #888;" +
        "                width: 100%;" +
        "                height: 100%;" +
        "                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" +
        "                animation-name: animatetop;" +
        "                animation-duration: 0.4s" +
        "            }" +
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
        "        <div id='buyplanpopup' class='modal' >" +
        "            <div class='modal-content'>" +
        "<iframe id='BuyPlaniframe' frameborder='0' allowtransparency='true' style='overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px' height='100%' width='100%' ></iframe> </div></div></div>");
})();

function OpenBuyPlanPopup(popuptitle, PlanCode, CouponCode, IsUserTracker = false) {
    $('#BuyPlaniframe').attr('src', '../buyPlan.html?PopupTitle=' + popuptitle + '&PlanCode=' + PlanCode + '&CouponCode=' + CouponCode + '&IsUserTracker=' + IsUserTracker);
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
