(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
$("<style id='myStyle' type='text/css'> #preload { margin-top: 17%;height: 150px; width: 150px;border-radius: 50%; border: 2px solid #e5e5e5;animation: 0.8s pre linear infinite;} @keyframes pre {0% {transform: rotate(0deg);border-top: 2px solid mediumseagreen;}100% {transform: rotate(360deg);border-top: 2px solid green;}}</style>").appendTo("head");
//
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
    "               <div id='otpapp' class='modal-dialog-centered'>  " +
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
    "                   </div></div> <div class='modal-dialog modal-dialog-centered modal-lg' style='display: none;' id='Thankyouformdiv'>" +
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
    "                </div></div> <div class='modal-dialog modal-dialog-centered modal-lg' style='overflow: hidden;display: none;' id='loadding'>" +
    "                    <div style='background-color:white;' class='modal-content'><div><center><div id='preload'></div></center></div> </div>  </div></div>");
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

//ShowLoding(true);
function ShowLoding(flag) {
    if (flag) {
        $('#otpapp').hide();
        $('#Thankyouformdiv').hide();
        $('#loadding').show();
        openmodalcallback();
    } else {
        closemodalcallback();
        $('#loadding').hide();
    }
}

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

var ProductApiBaseUrl = "https://live.healthassure.in/ProductApi/"
var RenewalOPDObj = null;
var timerFName = 'timer1';
function RenewalOPDPlan(username, planCode, relation, couponCode, policyNo) {
    return new Promise(function (resolve, reject) {
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        $.ajax({
            type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/RenewalOPDPlanRequest",
            data: JSON.stringify({ Username: username, PlanCode: planCode, CouponCode: couponCode, PolicyNo: policyNo, IsOTPVarification: true }),
            dataType: "json", headers: headers,
            success: function (result) {
                if (result.status) {
                    RenewalOPDObj = result;
                    $('#otpapp').show();
                    openmodalcallback();
                    $('#mobilenotext1').html(result.results.user.mobileNo.slice(result.results.user.mobileNo.length - 4));
                    $('#' + timerFName).html('00:00');
                    var leftover = result.results.otpDetails.otpExpiryTime;
                    var minutes = Math.floor(leftover / 60);
                    leftover = leftover - (minutes * 60);
                    $('#' + timerFName).html(minutes + ':' + leftover);
                    startTimer();
                    $('#otptextFeild1').html(' Resend OTP');
                    resolve(result);
                } else {
                    alert(result.message);
                    console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

function RenewalOPDPlanRequest(policyNo) {
    RenewalOPDPlan('', '', '', '', policyNo);
}

function OpnOPDPaymentPopUp(result, ProductApiBaseUrl) {
    return new Promise(function (resolve, reject) {
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        if (result.status) {
            var options = {
                "key": result.results.razorpayKey,
                "amount": result.results.transaction.amountIncludingGST,
                "currency": result.results.razorpayOrder.currency,
                "name": "HealthAssure",
                "description": result.results.user.planName,
                "image": ProductApiBaseUrl + "image/logo/halogo.png",
                "order_id": result.results.razorpayOrder.id,
                "handler": function (response) {
                    try {
                        //ShowLoding(true);
                    } catch { }
                    $.ajax({
                        type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/RenewalOPDPlanConformation",
                        data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", RefId: response.razorpay_payment_id, OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, Status: "Success" }),
                        dataType: "json", headers: headers,
                        success: function (res) {
                            if (res.status) {
                                resolve(res) // Resolve promise and go to then() 
                                try {
                                    //ShowLoding(false);
                                    //opningPaymentSuccesspage();
                                } catch { }
                            } else {
                                console.warn(res); reject("Error from Buy OPD Plan Conformation")
                            }
                        },
                        error: function (error) {
                            console.warn(error); reject(error) // Reject the promise and go to catch()
                        }
                    });
                },
                "prefill": { "name": result.results.user.name, "email": result.results.user.emailId, "contact": "91" + result.results.user.mobileNo },
                "notes": {
                    "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                },
                "theme": { "color": "#3399cc" },
                "modal": {
                    "ondismiss": function () {
                        try {
                            userClosePaymentPopup();
                        } catch { }
                    }
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                console.warn(response.error);
            });
            rzp1.open();
            try {
                //opningPaymentpage();
            } catch { }
        } else {
            console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
        }
    });
}

function userClosePaymentPopup() {
    closemodalcallback();
}

$('#VarifyOTPbtn').click(function () {
    var otp = '';
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) {
        otp = otp + inputs[i].value;
    }
    VarifyOTPforValidation(otp, RenewalOPDObj.results.user.mobileNo).then(function (res) {
        $('#VarifyOTPbtn').html('Verified');
        $('#message').html('');
        OpnOPDPaymentPopUp(RenewalOPDObj, ProductApiBaseUrl).then(function (resu) {
            $('#Thankyouformdiv').show();
        }).catch(function (err) {
            $('#message').html(err.message);
        });
        $('#otpapp').hide();
    }).catch(function (err) {
        $('#message').html(err.message);
    });
});

function VarifyOTPforValidation(otp, mobileno) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: ProductApiBaseUrl + "api/User/VerifyMobileNo",
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
                reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

function GetOPDPlanForRenewal(policyNo) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: ProductApiBaseUrl + "api/UserOPDPlans/GetOPDPlanForRenewal?policyNo=" + policyNo,
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
                reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

