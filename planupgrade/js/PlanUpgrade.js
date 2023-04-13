(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
$("<style type='text/css'>.preloader1 { top:0; bottom:0; left:0; right:0; position:absolute; margin:auto; width: 100px; height: 100px; border-radius: 100%; border: 4px solid white; border-top: 4px solid #0f5fc2; order-right: 4px solid #0f5fc2; border-bottom: 4px solid #0f5fc2; -webkit-animation: spin 1s linear infinite; animation: spin 1s linear infinite;}@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}@-webkit-keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>").appendTo("head");
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
    "                width: 100px;" +
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
    "                                <div id='otp' class='inputs d-flex flex-row justify-content-center mt-2'>" +
    "                                       <input type='number' class='m-2 text-center form-control rounded heightwidth1' id='input1' maxlength='6' />" +
    "                                </div>" +
    "                                <span> Time Left: <small id='timer1'>00:00</small></span>" +
    "                                <span style='color: red;' id='message'></span>" +
    "                                <div class='mt-4'> <input type='hidden' id='planupgradeTypeId'/> <button id='VerifyOTPUpgradebtn'" +
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
    "                </div></div> </div></div> <div style='display: none;' id='Lodingdivid' class='preloader1'></div>");

function ShowLoding(flag) {
    if (flag) {
        $("[id*='otpapp']").hide();
        $("[id*='Thankyouformdiv']").hide();
        $("[id*='Lodingdivid']").show();
        openmodalcallback();
    } else {
        closemodalcallback();
        $("[id*='Lodingdivid']").hide();
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
var UpgradeOPDObj = null;
var timerFName = 'timer1';
function UpgradeOPDPlan(username, planCode, upgradePlanCode, relation, couponCode, policyNo) {
    return new Promise(function (resolve, reject) {
        ShowLoding(true);
        $('#planupgradeTypeId').val('2')
        $("[id*='input1']").val('');
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        $.ajax({
            type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/UpgradeOPDPlanRequest",
            data: JSON.stringify({ Username: username, PlanCode: planCode, Relation: relation, UpgradePlanCode: upgradePlanCode, CouponCode: couponCode, PolicyNo: policyNo, IsOTPVarification: true }),
            dataType: "json", headers: headers,
            success: function (result) {
                if (result.status) {
                    UpgradeOPDObj = result;
                    $("[id*='otpapp']").show();
                    $("[id*='exampleModal']").hide();
                    ShowLoding(false);
                    openmodalcallback();
                    $("[id*='mobilenotext1']").html(result.results.user.mobileNo.slice(result.results.user.mobileNo.length - 4));
                    $('#' + timerFName).html('00:00');
                    var leftover = result.results.otpDetails.otpExpiryTime;
                    var minutes = Math.floor(leftover / 60);
                    leftover = leftover - (minutes * 60);
                    $('#' + timerFName).html(minutes + ':' + leftover);
                    startTimer();
                    $("[id*='otptextFeild1']").html(' Resend OTP');
                    resolve(result);
                } else {
                    ShowLoding(false);
                    alert(result.message);
                    console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                ShowLoding(false);
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

function OnlyUpgradeOPDPlan(username, planCode, upgradePlanCode, relation, couponCode, policyNo) {
    return new Promise(function (resolve, reject) {
        $('#planupgradeTypeId').val('1')
        ShowLoding(true);
        $("[id*='input1']").val('');
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        $.ajax({
            type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/UpgradeOnlyOPDPlanRequest",
            data: JSON.stringify({ Username: username, PlanCode: planCode, Relation: relation, UpgradePlanCode: upgradePlanCode, CouponCode: couponCode, PolicyNo: policyNo, IsOTPVarification: true }),
            dataType: "json", headers: headers,
            success: function (result) {
                if (result.status) {
                    UpgradeOPDObj = result;
                    $("[id*='otpapp']").show();
                    $("[id*='exampleModal']").hide();
                    ShowLoding(false);
                    openmodalcallback();
                    $("[id*='mobilenotext1']").html(result.results.user.mobileNo.slice(result.results.user.mobileNo.length - 4));
                    $('#' + timerFName).html('00:00');
                    var leftover = result.results.otpDetails.otpExpiryTime;
                    var minutes = Math.floor(leftover / 60);
                    leftover = leftover - (minutes * 60);
                    $('#' + timerFName).html(minutes + ':' + leftover);
                    startTimer();
                    $("[id*='otptextFeild1']").html(' Resend OTP');
                    resolve(result);
                } else {
                    ShowLoding(false);
                    alert(result.message);
                    console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                ShowLoding(false);
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}
function RenewalOPDPlan(username, planCode, upgradePlanCode, relation, couponCode, policyNo) {
    return new Promise(function (resolve, reject) {
        ShowLoding(true);
        $('#planupgradeTypeId').val('3')
        $("[id*='input1']").val('');
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        $.ajax({
            type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/RenewalOPDPlanRequest",
            data: JSON.stringify({ Username: username, PlanCode: planCode, Relation: relation, UpgradePlanCode: upgradePlanCode, CouponCode: couponCode, PolicyNo: policyNo, IsOTPVarification: true }),
            dataType: "json", headers: headers,
            success: function (result) {
                if (result.status) {
                    UpgradeOPDObj = result;
                    $("[id*='otpapp']").show();
                    $("[id*='exampleModal']").hide();
                    ShowLoding(false);
                    openmodalcallback();
                    $("[id*='mobilenotext1']").html(result.results.user.mobileNo.slice(result.results.user.mobileNo.length - 4));
                    $('#' + timerFName).html('00:00');
                    var leftover = result.results.otpDetails.otpExpiryTime;
                    var minutes = Math.floor(leftover / 60);
                    leftover = leftover - (minutes * 60);
                    $('#' + timerFName).html(minutes + ':' + leftover);
                    startTimer();
                    $("[id*='otptextFeild1']").html(' Resend OTP');
                    resolve(result);
                } else {
                    ShowLoding(false);
                    alert(result.message);
                    console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                ShowLoding(false);
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

function UpgradeOPDPlanRequest(policyNo, upgradePlanCode = '') {
    UpgradeOPDPlan('', '', upgradePlanCode, [], '', policyNo);
}

function RenewalOPDPlanRequest(policyNo, upgradePlanCode = '') {
    RenewalOPDPlan('', '', upgradePlanCode, [], '', policyNo);
}

function OnlyUpgradeOPDPlanRequest(policyNo, upgradePlanCode = '') {
    OnlyUpgradeOPDPlan('', '', upgradePlanCode, [], '', policyNo);
}


function OpnOPDPaymentUpgradePopUp(result, ProductApiBaseUrl) {
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
                        ShowLoding(true);
                    } catch { }
                    $.ajax({
                        type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/UpgradeOPDPlanConformation",
                        data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", RefId: response.razorpay_payment_id, OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, Status: "Success" }),
                        dataType: "json", headers: headers,
                        success: function (res) {
                            if (res.status) {
                                resolve(res) // Resolve promise and go to then() 
                                try {
                                    ShowLoding(false);
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
                    "transactionId": result.results.razorpayOrder.receipt,
                    "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                },
                "theme": { "color": "#3399cc" },
                "modal": {
                    "ondismiss": function () {
                        try {
                            ShowLoding(false);
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

function OpnOPDPaymentOnlyUpgradePopUp(result, ProductApiBaseUrl) {
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
                        ShowLoding(true);
                    } catch { }
                    $.ajax({
                        type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/UpgradeOnlyOPDPlanConformation",
                        data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", RefId: response.razorpay_payment_id, OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, Status: "Success" }),
                        dataType: "json", headers: headers,
                        success: function (res) {
                            if (res.status) {
                                resolve(res) // Resolve promise and go to then() 
                                try {
                                    ShowLoding(false);
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
                    "transactionId": result.results.razorpayOrder.receipt,
                    "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                },
                "theme": { "color": "#3399cc" },
                "modal": {
                    "ondismiss": function () {
                        try {
                            ShowLoding(false);
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

function OpnOPDPaymentRenewalPopUp(result, ProductApiBaseUrl) {
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
                        ShowLoding(true);
                    } catch { }
                    $.ajax({
                        type: "POST", url: ProductApiBaseUrl + "api/OPDPlans/RenewalOPDPlanConformation",
                        data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", RefId: response.razorpay_payment_id, OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, Status: "Success" }),
                        dataType: "json", headers: headers,
                        success: function (res) {
                            if (res.status) {
                                resolve(res) // Resolve promise and go to then() 
                                try {
                                    ShowLoding(false);
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
                    "transactionId": result.results.razorpayOrder.receipt,
                    "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                },
                "theme": { "color": "#3399cc" },
                "modal": {
                    "ondismiss": function () {
                        try {
                            ShowLoding(false);
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

$("[id*='VerifyOTPUpgradebtn']").click(function () {
    var otp = document.getElementById('input1').value;
    VarifyOTPforValidation(otp, UpgradeOPDObj.results.user.mobileNo).then(function (res) {
        $("[id*='VerifyOTPUpgradebtn']").html('Verified');
        $("[id*='message']").html('');
        var planupgradeTypeId = parseInt($('#planupgradeTypeId').val());
        if (planupgradeTypeId === 1) {
            OpnOPDPaymentOnlyUpgradePopUp(UpgradeOPDObj, ProductApiBaseUrl).then(function (resu) {
                //$("[id*='Thankyouformdiv').show();
                window.open("https://live.healthassure.in/plans/thankyou.html", "_parent");
            }).catch(function (err) {
                $("[id*='message']").html(err.message);
            });
        } else if (planupgradeTypeId === 2) {
            OpnOPDPaymentUpgradePopUp(UpgradeOPDObj, ProductApiBaseUrl).then(function (resu) {
                //$("[id*='Thankyouformdiv').show();
                window.open("https://live.healthassure.in/plans/thankyou.html", "_parent");
            }).catch(function (err) {
                $("[id*='message']").html(err.message);
            });
        } else if (planupgradeTypeId === 3) {
            OpnOPDPaymentRenewalPopUp(UpgradeOPDObj, ProductApiBaseUrl).then(function (resu) {
                //$("[id*='Thankyouformdiv').show();
                window.open("https://live.healthassure.in/plans/thankyou.html", "_parent");
            }).catch(function (err) {
                $("[id*='message']").html(err.message);
            });
        }
        $("[id*='otpapp']").hide();
    }).catch(function (err) {
        $("[id*='message']").html(err.message);
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

function GetOPDPlanForUpgrade(policyNo, planCode = '', upgradePlanType = '1') {
    return new Promise(function (resolve, reject) {
        ShowLoding(true);
        $.ajax({
            type: "GET",
            url: ProductApiBaseUrl + "api/UserOPDPlans/GetUpgradePlanDetails?policyNo=" + policyNo + "&planCode=" + planCode + "&upgradeType=" + upgradePlanType,
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            success: function (result) {
                console.warn(result.message);
                ShowLoding(false);
                if (result.status) {
                    resolve(result) // Resolve promise and go to then() 
                } else {
                    reject(result) // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                ShowLoding(false);
                console.warn(eror);
                reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

