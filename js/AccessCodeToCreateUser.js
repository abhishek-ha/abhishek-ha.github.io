
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
    "                width: 430px;" +
    "                border: none;" +
    "                height: 330px;" +
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
    "<div id='otpapp' class='modal-dialog-centered'>" +
    "                    <div class='container height-100 d-flex justify-content-center align-items-center'>" +
    "                        <div class='position-relative'>" +
    "                            <div class='card p-2 text-center'>" +
    "                                <h6>  Please enter the one time password  <span class='px-4 ml-3' onclick='closemodalcallback()'><i class='fa  fa-times' aria-hidden='true'></i></span> <br> </h6>" +
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
    "                </div></div> <div class='modal-dialog modal-dialog-centered modal-lg' style='display: none;' id='Thankyouformdiv'>" +
    "                    <div style='background-color:white;' class='modal-content'>" +
    "                        <div class='modal-header'>" +
    "                            <h5 class='modal-title text-center' id='exampleModalLabel'> </h5>" +
    "                            <button type='button' class='close' onclick='closemodalcallback()'>" +
    "                                <span aria-hidden='true'>&times;</span>" +
    "                            </button>" +
    "                        </div>" +
    "                        <div class='modal-body'>" +
    "                            <div class='row'>" +
    "                                <div class='pt-5'>" +
    "                                    <h3 class='text-center' style='font-size:23px;'> Thank you for choosing us. We assure you to take care of Your Health. !!</h3>" +
    "                                    <p class='text-center pt-2' id='callbackAmessageId1'><b>Please Log in with your credentials on our Portal or App and start using the benefits.</b></p>" +
    "                                    <div class='col-md-8  text-center mx-auto'>" +
    "                                        <button type='submit' style='background-color: green;' data-dismiss='modal' value='OK'" +
    "                                            class=' btn-class  pgreenbtn' onclick='closemodalcallback()' >" +
    "                                            Ok </button>" +
    "                                    </div>" +
    "                                </div>" +
    "                            </div>" +
    "                        </div>" +
    "                    </div>" +
    "                </div>" +
    "            </div></div></div>");
try {
    var app = new Vue({
        el: '#otpapp',
        methods: {
            inputenter(id) {
                const inputs = document.querySelectorAll('#otp > *[id]');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].addEventListener('keydown', function (event) {
                        if (event.key === "Backspace") {
                            inputs[i].value = '';
                            if (i !== 0) inputs[i - 1].focus();
                        } else {
                            if (i === inputs.length - 1 && inputs[i].value !== '') { return true; }
                            else if (event.keyCode > 47 && event.keyCode < 58) {
                                inputs[i].value = event.key;
                                if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
                            }
                            else if (event.keyCode > 64 && event.keyCode < 91) {
                                inputs[i].value = String.fromCharCode(event.keyCode);
                                if (i !== inputs.length - 1) inputs[i + 1].focus();
                                event.preventDefault();
                            }
                        }
                    });
                }
            }
        }
    });
} catch (e) { console.log(e); }
function openmodalcallback() {
    var modal = document.getElementById("callbackpopup");
    modal.style.display = "block";
}
function closemodalcallback() {
    var modal = document.getElementById("callbackpopup");
    modal.style.display = "none";
}

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

var timerFName = 'timer1';
var UserSelfRegistrationId = '';
function CreateUserWithAccessCode(accessCode, firstName, lastName, gender, mobileNumbar, emailId, dOB, relative) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: "https://live.healthassure.in/ProductApi/api/User/LogInWithAccessCode",
            dataType: "json",
            data: JSON.stringify({ AccessCode: accessCode, FirstName: firstName, LastName: lastName, Gender: gender, MobileNumbar: mobileNumbar, EmailId: emailId, DOB: dOB, Relations: relative }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            success: function (result) {
                console.warn(result.message);
                if (result.status) {
                    UserSelfRegistrationId = result.results[0].userSelfRegistrationId;
                    $('#otpapp').show();
                    openmodalcallback();
                    $('#mobilenotext1').html(mobileNumbar.slice(mobileNumbar.length - 4));
                    $('#' + timerFName).html('00:00');
                    var leftover = result.results[0].otpExpiryTime;
                    var minutes = Math.floor(leftover / 60);
                    leftover = leftover - (minutes * 60);
                    $('#' + timerFName).html(minutes + ':' + leftover);
                    startTimer();
                    $('#otptextFeild1').html(' Resend OTP');
                    resolve(result.message);
                } else {
                    console.warn(result); reject(result) // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror);
                reject(eror)
                //reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

$('#VarifyOTPbtn').click(function () {
    var otp = '';
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
        otp = otp + inputs[i].value;
    }
    LogInWithAccessCodeConfirmation(otp, UserSelfRegistrationId).then(function (res) {
        $('#VarifyOTPbtn').html('Verified');
        $('#message').html('');
        $('#otpapp').hide();
        $('#Thankyouformdiv').show();
    }).catch(function (err) {
        $('#message').html(err.message);
    });
});


function LogInWithAccessCodeConfirmation(otp, registrationId) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: "https://live.healthassure.in/ProductApi/api/User/LogInWithAccessCodeConfirmation",
            dataType: "json",
            data: JSON.stringify({ RegistrationId: registrationId, OTP: otp }),
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
