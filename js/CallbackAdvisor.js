function getUrlVars(url = window.location.href) {
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var MobileNoValue = null;
var NameValue = null;
var EmailValue = null;
var SourceValue = null;

function SaveCallbackAdvisor(Phone, Name, Email, Source, IsShowOTPPopup = true) {
    return new Promise(function (resolve, reject) {
        var Vars = getUrlVars();
        UtmSource = Vars["utm_source"];
        if (Vars["utm_source"] == null) {
            UtmSource = Source;
        }
        let AdvisorObj = {
            mobileNo: Phone, name: Name.replace("%20", " "), dob: "2000-01-01", email: Email, utmSource: UtmSource, utmMedium: Vars["utm_medium"], utmCampaign: Vars["utm_campaign"], utmTerm: Vars["utm_term"],
            utmContent: Vars["utm_content"]
        };
        if (IsShowOTPPopup) {
            MobileNoValue = Phone;
            NameValue = Name;
            EmailValue = Email;
            SourceValue = Source;
            OpenOTPPopup();
            resolve({ message: "WE WILL GET BACK TO YOU SOON" }) // Resolve promise and go to then() 
        } else {
            $.ajax({
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
                    resolve(result) // Resolve promise and go to then() 
                },
                error: function (eror) {
                    console.warn(eror);
                    reject(eror) // Reject the promise and go to catch()
                }
            });
        }
    });
}

function UserTracking(MobileNo, sub1 = null) {
    try {
        if (sub1 == null) {
            sub1 = Date.now();
        }
        var Vars = getUrlVars();
        if (Vars["utm_source"].toLowerCase() == 'icubes') {
            $('body').append("<iframe src='https://tracking.icubeswire.co/aff_a?offer_id=2617&adv_sub1=" + sub1 + "&adv_sub2=" + MobileNo + "' width='1' height='1' id='pixelcodeurl' /></iframe>");
        }
        if (Vars["utm_source"].toLowerCase() == 'fb lead ads' || Vars["utm_source"].toLowerCase() == 'facebook') {
            fbq('track', 'SubmitApplication');
        }
    } catch { }
}

function GetOTPforValidation(MobileNumbar) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: "https://live.healthassure.in/ProductApi/api/User/GetOTPForMobileNo?MobileNumbar=" + MobileNumbar + "&OTPType=MobileVerification",
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            success: function (result) {
                console.warn(result.message);
                if (result.status) {
                    resolve(result) // Resolve promise and go to then() 
                } else {
                    reject(result) // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror);
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function VarifyOTPforValidation(otp, mobileno) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: "https://live.healthassure.in/ProductApi/api/User/VerifyMobileNo",
            dataType: "json",
            data: JSON.stringify({ MobileNumbar: mobileno, OTP: otp }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            success: function (result) {
                console.warn(result.message);
                if (result.status) {
                    resolve(result) // Resolve promise and go to then() 
                } else {
                    reject(result) // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror);
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
    $('body').append("<div style=' background-color: rgba(0, 0, 0, 0.5);'>" +
        "        <style>" +
        "            .modal-body {" +
        "                padding: 2px 16px;" +
        "            }" +
        "" +
        "            .modal-content1 {" +
        "                position: absolute;" +
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
        "" +
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
        "" +
        "            .card {" +
        "                width: 400px;" +
        "                border: none;" +
        "                height: 300px;" +
        "                box-shadow: 0px 5px 20px 0px #6F1667;" +
        "                z-index: 1;" +
        "                display: flex;" +
        "                justify-content: center;" +
        "                align-items: center" +
        "            }" +
        "" +
        "            .card h6 {" +
        "                color: #6F1667;" +
        "                font-size: 20px" +
        "            }" +
        "" +
        "            .inputs input {" +
        "                width: 40px;" +
        "                height: 40px" +
        "            }" +
        "" +
        "            input[type=number]::-webkit-inner-spin-button," +
        "            input[type=number]::-webkit-outer-spin-button {" +
        "                -webkit-appearance: none;" +
        "                -moz-appearance: none;" +
        "                appearance: none;" +
        "                margin: 0" +
        "            }" +
        ".heightwidth1{   padding: 0px;}" +
        "            .form-control:focus {" +
        "                box-shadow: none;" +
        "                border: 2px solid #808080" +
        "            }" +
        "" +
        "            .validate {" +
        "                border-radius: 20px;" +
        "                height: 40px;" +
        "                background-color: green;" +
        "                border: 1px solid green;" +
        "                width: 100%" +
        "            }" +
        "" +
        "            .content a {" +
        "                color: #D64F4F;" +
        "                transition: all 0.5s" +
        "            }" +
        "" +
        "            .content a:hover {" +
        "                color: #6F1667" +
        "            }" +
        "        </style>" +
        "        <div id='callbackpopup' class='modal'>" +
        "            <div class='modal-content1'>" +
        "                <div id='otpapp' class='modal-dialog-centered' >" +
        "                    <div class='container height-100 d-flex justify-content-center align-items-center'>" +
        "                        <div class='position-relative'>" +
        "                            <div class='card p-2 text-center'>" +
        "                                <h6>Please enter the one time password <br> </h6>" +
        "                                <div> <span> sent to +91******</span> <small id='mobilenotext1'>4343</small> </div>" +
        "                                <div id='otp' class='inputs d-flex flex-row justify-content-center mt-2'> <input" +
        "                                        class='m-2 text-center form-control rounded heightwidth1' type='text' id='input1'" +
        "                                        v-on:keyup='inputenter(1)' maxlength='1' />" +
        "                                    <input class='m-2 text-center form-control rounded heightwidth1' v-on:keyup='inputenter(2)'" +
        "                                        type='text' id='input2' maxlength='1' />" +
        "                                    <input class='m-2 text-center form-control rounded heightwidth1' v-on:keyup='inputenter(3)'" +
        "                                        type='text' id='input3' maxlength='1' />" +
        "                                    <input class='m-2 text-center form-control rounded heightwidth1' v-on:keyup='inputenter(4)'" +
        "                                        type='text' id='input4' maxlength='1' />" +
        "                                    <input class='m-2 text-center form-control rounded heightwidth1' v-on:keyup='inputenter(5)'" +
        "                                        type='text' id='input5' maxlength='1' />" +
        "                                    <input class='m-2 text-center form-control rounded heightwidth1' v-on:keyup='inputenter(6)'" +
        "                                        type='text' id='input6' maxlength='1' />" +
        "                                </div>" +
        "                                <span> Time Left: <small id='timer1'>00:00</small></span>" +
        "                                <span style='color: red;' id='message'></span>" +
        "                                <div class='mt-4'> <button id='VarifyOTPbtn'" +
        "                                        class='btn btn-danger px-4 validate'>Validate</button>" +
        "                                </div>" +
        "                                <div class='mt-3 content d-flex justify-content-center align-items-center'> <span>Didn't" +
        "                                        get the" +
        "                                        code &nbsp</span> <a href='javascript:OpenOTPPopup()'" +
        "                                        class='text-decoration-none ms-3'><small" +
        "                                            id='otptextFeild1'>Resend(1/3)</small></a>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "                <div class='modal-dialog modal-dialog-centered modal-lg' id='CallBackformdiv'>" +
        "                    <div style='background-color:white;' class='modal-content'>" +
        "                        <div class='modal-header'>" +
        "                            <h5 class='modal-title text-center' id='exampleModalLabel'> </h5>" +
        "                            <button type='button' class='close' onclick='closemodalcallback()'>" +
        "                                <span aria-hidden='true'>&times;</span>" +
        "                            </button>" +
        "                        </div>" +
        "                        <div class='modal-body'>" +
        "                            <div class='row'>" +
        "                                <div class='col-lg-6  '>" +
        "                                    <img src='https://healthassure.in/ha/images/call-center1.png' class='img-fluid mob1' alt='call us'>" +
        "                                </div>" +
        "                                <div class='col-lg-6 col-md-12 col-sm-12' id='CallbackAdvisorformdiv1'>" +
        "                                    <h3 class='pb-4'>Let us call you back!</h3>" +
        "                                    <form class='mr-4' id='CallbackAdvisorformsubmit' method='post'>" +
        "                                        <div class='form-group row'>" +
        "                                            <div class='col-sm-12'>" +
        "                                                <input type='text' class='form-control' id='callbackAdvisorName1'" +
        "                                                    placeholder='Name *' required>" +
        "                                            </div>" +
        "                                        </div>" +
        "                                        <div class='form-group row'>" +
        "                                            <div class='col-sm-12'>" +
        "                                                <input type='text' class='form-control ' id='callbackAdvisorPhone1'" +
        "                                                    placeholder='Phone *' pattern='[789][0-9]{9}' required>" +
        "                                            </div>" +
        "                                        </div>" +
        "                                        <div class='form-group row'>" +
        "                                            <div class='col-sm-12'>" +
        "                                                <input type='email' class='form-control ' id='callbackAdvisorEmail1'" +
        "                                                    placeholder='Email *' required>" +
        "                                            </div>" +
        "                                        </div>" +
        "                                        <div class='form-group row '>" +
        "                                            <div class='col-md-8 mx-auto'>" +
        "                                                <button type='submit' class=' btn-class pgreenbtn' style='background-color:#0a8943;border-color:1px solid #0a8943;'> Submit </button>" +
        "                                            </div>" +
        "                                        </div>" +
        "                                    </form>" +
        "                                </div>" +
        "                                <div class='col-md-6 pt-5' id='callbackAdvisormessagediv1' style='display: none;'>" +
        "                                    <h3 class='text-center'> Thank you for your interest !!</h3>" +
        "                                    <p class='text-center pt-2' id='callbackAmessageId1'><b></b></p>" +
        "                                    <div class='col-md-8   mx-auto'>" +
        "                                        <button type='submit' style='background-color: green;' data-dismiss='modal' value='OK'" +
        "                                            class=' btn-class  pgreenbtn' onclick='closemodalcallback()' >" +
        "                                            Ok" +
        "                                        </button>" +
        "                                       <button id='okbtnclosemodal' type='submit' style='margin-top: 10px;background-color: green;display: none;' data-dismiss='modal' value='OK'" +
        "                                            class=' btn-class  pgreenbtn' onclick='closemodalcallbackwithbuyplan()' >" +
        "                                            Buy now" +
        "                                        </button>" +
        "                                        <button id='downloadpdfbtnclosemodal' type='submit' style='margin-top: 10px;background-color: green;display: none;' data-dismiss='modal' value='OK'" +
        "                                            class=' btn-class  pgreenbtn' onclick='closemodalcallbackwithdownloadpdf()' >" +
        "                                            Buy now" +
        "                                        </button>" +
        "                                    </div>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>");
})();


function openmodalcallback() {
    var modal = document.getElementById("callbackpopup");
    modal.style.display = "block";

}

function closemodalcallback() {
    var modal = document.getElementById("callbackpopup");
    modal.style.display = "none";
    $('#CallbackAdvisorformdiv1').show();
    $('#callbackAdvisormessagediv1').hide();
    $('#callbackAdvisorPhone1').val('');
    $('#callbackAdvisorName1').val('');
    $('#callbackAdvisorEmail1').val('');
    $('#' + timerFName).html('00:00');
    $('#otptextFeild1').html(' Send OTP');
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    if ((plancode != null && plancode != '') || (downloadpdflink != null && downloadpdflink != '')) {
        $('body').append("<iframe src='https://momagic.g2afse.com/success.php?offer_id=7357&afstatus=1' height='1' width='1' />");
        $('body').append("<img src='https://momagic88.gotrackier.com/pixel?adid=623869fc39eb933fd52b2844'")
        OpenBuyPlanPopup(defoultSource1, plancode, '');
    }
}

function closemodalcallbackwithdownloadpdf(){
    window.open(downloadpdflink);
}

function closemodalcallbackwithbuyplan() {
    closemodalcallback();
    if (plancode != null && plancode != '') {
        OpenBuyPlanPopup(defoultSource1, plancode, '');
    }
}

try {
    var app = new Vue({
        el: '#otpapp',
        methods: {
            inputenter(id) {
                const inputs = document.querySelectorAll('#otp > *[id]');
                for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
            }
        }
    });
} catch { }
var defoultSource1 = null;
var showotppopup = true;
var plancode = null;
var downloadpdflink = null;
function CallBackModalPopup(defoultSource, showotppopup1 = true, plancode1 = null, downloadpdflink1 = null) {
    openmodalcallback();
    $('#CallBackformdiv').show();
    $('#otpapp').hide();
    defoultSource1 = defoultSource;
    showotppopup = showotppopup1;
    plancode = plancode1;
    downloadpdflink = downloadpdflink1;
    if (plancode1 != null && plancode1 != '') {
        $('#okbtnclosemodal').show();
    }
    if (downloadpdflink != null && downloadpdflink != '') {
        $('#downloadpdfbtnclosemodal').show();
    }
}

$("#CallbackAdvisorformsubmit").submit(function (event) {
    event.preventDefault();
    SaveCallbackAdvisor($('#callbackAdvisorPhone1').val(), $('#callbackAdvisorName1').val(), $('#callbackAdvisorEmail1').val(), defoultSource1, showotppopup).then(function (result) {
        $('#callbackAmessageId1').html(result.message);
        $('#CallbackAdvisorformdiv1').hide();
        $('#callbackAdvisormessagediv1').show();
    });
});

var timerFName = 'timer1';
function OpenOTPPopup() {
    $('#CallBackformdiv').hide();
    $('#otpapp').show();
    openmodalcallback();
    $('#mobilenotext1').html(MobileNoValue.slice(MobileNoValue.length - 4));

    GetOTPforValidation(MobileNoValue).then(function (result) {
        $('#' + timerFName).html('00:00');
        var leftover = result.results.otpExpiryTime;
        var minutes = Math.floor(leftover / 60);
        leftover = leftover - (minutes * 60);
        $('#' + timerFName).html(minutes + ':' + leftover);
        //$('#' + OTPdivName).show();
        startTimer();
        $('#otptextFeild1').html(' Resend OTP');
    }).catch(function () {
        // $('#' + OTPdivName).hide();
    });
}

$('#VarifyOTPbtn').click(function () {
    var otp = '';
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
        otp = otp + inputs[i].value;
    }
    VarifyOTPforValidation(otp, MobileNoValue).then(function (res) {
        $('#VarifyOTPbtn').html('Verified');
        $('#message').html('');
        SaveCallbackAdvisor(MobileNoValue, NameValue, EmailValue, SourceValue, false).then(function (result) {
            $('#callbackAmessageId1').html(result.message);
            $('#CallbackAdvisorformdiv1').hide();
            $('#callbackAdvisormessagediv1').show();
            $('#VarifyOTPbtn').html('Validate');
        });
        $('#otpapp').hide();
        $('#CallBackformdiv').show();
    }).catch(function (err) {
        //$('#' + OTPdivName).hide();
        $('#message').html(err.message);
    });
});

function startTimer() {
    var presentTime = document.getElementById(timerFName).innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
        return
    }
    document.getElementById(timerFName).innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}