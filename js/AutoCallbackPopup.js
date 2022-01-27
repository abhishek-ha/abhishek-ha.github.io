function getUrlVarsAutoPopUp(url = window.location.href) {
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
(function () {
    $('body').append("<div id='AutoCallbackPopupModal' class='modal fade ' role='dialog' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1'>" +
        "    <div class='modal-dialog modal-dialog-centered modal-lg rounded'>" +
        "      <div class='modal-content bg-white'>" +
        "        <div class='modal-header'>" +
        "          <h5 class='modal-title'> </h5>" +
        "        <button type='button' class='btn' onclick='AutoCallbackPopupformclose()' data-bs-dismiss='modal'>X</button></div>" +
        "        <div class='modal-body '><div class='row my-3 mx-3'>" +
        "            <div class='col-xxl-6 col-xl-6 col-lg-6 col-md-16 col-sm-12 '><img src='https://healthassure.in/images/Automodalpopup.png' class='img-fluid'></div>" +
        "	<div class='col-xxl-6 col-xl-6 col-lg-6 col-md-16 col-sm-12'>" +
        "    <h2 class='modalhead'> Not Ready Yet ? </h2>" +
        "    <h4 class='pb-2'><b> Let us help you out</b></h4>" +
        "     <form class='mb-5' id='AutoCallbackPopupform'>" +
        "	<div class='form-group'><input type='text' class='form-control' autocomplete='off' id='AutoPopupName' placeholder='Name *' required></div>" +
        "	<div class='form-group'><input type='text' class='form-control' autocomplete='off' id='AutoPopupPhone'  placeholder='Phone *' pattern='[0123456789][0-9]{9}'' title='Please Enter Ten digits Number' maxlength='10' required></div>" +
        "	<div class='form-group'><input type='email' class='form-control' autocomplete='off' id='AutoPopupEmail' placeholder='Email *'  required></div>" +
        "  <div class='form-group mx-auto text-center'>" +
        "    <button class='btn btn1 btn-primary btn-block' type='submit'>Submit </button>" +
        "   </div></form></div></div></div></div></div></div>");
    var IsOpenHelpPopup = true;
    $(document.body).click(function () {
        IsOpenHelpPopup = false;
    });
    setTimeout(OpenHelpPopup, 8000);
    function OpenHelpPopup() {
        if (IsOpenHelpPopup) {
            $('#AutoCallbackPopupModal').modal('show');
            IsOpenHelpPopup = false;
        }
    }
})();
function AutoCallbackPopupformclose(){
    $('#AutoCallbackPopupModal').modal('hide');
}
$('#AutoCallbackPopupform').submit(function (event) {
    event.preventDefault();
    debugger;
    var AutoVars = getUrlVarsAutoPopUp();
    var UtmSource = AutoVars["utm_source"];
    if (AutoVars["utm_source"] == null) {
        var path = window.location.pathname;
        var pathsplit = path.split("/");
        if (pathsplit[pathsplit.length - 1] == 'index.html') {
            UtmSource = pathsplit[pathsplit.length - 2];
        } else {
            UtmSource = pathsplit[pathsplit.length - 1].replace('.html','');
        }
    }
    let AdvisorObj = {
        mobileNo: $('#AutoPopupPhone').val(), name: $('#AutoPopupName').val(), dob: "2000-01-01", email: $('#AutoPopupEmail').val(), utmSource: UtmSource, utmMedium: AutoVars["utm_medium"], utmCampaign: AutoVars["utm_campaign"], utmTerm: AutoVars["utm_term"],
        utmContent: AutoVars["utm_content"],status: "Fresh Lead"
    };
    $('#AutoCallbackPopupModal').modal('hide');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://live.healthassure.in/ProductApi/api/User/CallbackAdvisor", false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    //xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
    //xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(JSON.stringify(AdvisorObj));
    /*$.ajax({
        type: "POST",
        url: "https://live.healthassure.in/ProductApi/api/User/CallbackAdvisor",
        data: JSON.stringify(AdvisorObj),
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (result) {
            console.log(result.message);
        },
        error: function (eror) {
            console.warn(eror);
        }
    });*/
});

