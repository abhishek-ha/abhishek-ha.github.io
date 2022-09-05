// JavaScript source code
const APiBaseURL = 'https://live.healthassure.in/ProductApi';
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

function GetPartnerPlanDetails(PartnerCode) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: APiBaseURL + '/api/InsuranceAgent/GetPartnerPlanDetails?PartnerCode=' + PartnerCode,
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

function CreateOrderOPDPlans(Name, Email, MobileNo, DOB, Gender, PlanCode, Relations, UserAddress) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: APiBaseURL + '/api/OPDPlans/OPDPlansPurchase',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'PartnerOPDPlanApiKey': '14UGczJo0lYOe5ilSzlT2cvLTj1lymz2lRWaBCwIQMd=pnIKeTDBAYApRXj6xO'
            },
            data: JSON.stringify({ Name: Name, Email: Email, MobileNo: MobileNo, DOB: DOB, Gender: Gender, PlanCode: PlanCode, Relations: Relations, UserAddress: UserAddress, IsSendPaymentLink: true }),
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

function GetTransactionDetails(TransactionId) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: APiBaseURL + '/api/InsuranceAgent/GetTransactionDetails?TransactionId=' + TransactionId,
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

function VerifyEmailId(MobileNumbar, OTP, EmailId, Source) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: APiBaseURL + '/api/User/VerifyEmailId',
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            data: JSON.stringify({ MobileNumbar: MobileNumbar, OTP: OTP, Source: Source, EmailId: EmailId }),
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

function GetOTPForEmailId(Emailid, Source, MobileNo, PlanCode) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: APiBaseURL + '/api/User/GetOTPForEmailId?EmailId=' + Emailid + '&Source=' + Source + '&MobileNo=' + MobileNo + '&TriggerType=PLANPURCHASEVERIFYOTP' + '&PlanCode=' + PlanCode,
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

function BuyOPDPlan(TransactionId, razorpaykey, amount, order_id, description, Name, Email, MobileNo) {
    return new Promise(function (resolve, reject) {
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'PartnerOPDPlanApiKey': '14UGczJo0lYOe5ilSzlT2cvLTj1lymz2lRWaBCwIQMd=pnIKeTDBAYApRXj6xO' };
        var options = {
            "key": razorpaykey,
            "amount": amount,
            "currency": "INR",
            "name": "HealthAssure",
            "description": description,
            "image": APiBaseURL + "/image/logo/halogo.png",
            "order_id": order_id,
            "handler": function (response) {
                $.ajax({
                    type: "POST", url: APiBaseURL + "/api/OPDPlans/OPDPlansPurchaseConformation",
                    data: JSON.stringify({ TransactionId: TransactionId, Message: "Payment Success", OrderId: order_id, Signature: response.razorpay_signature, RefId: response.razorpay_payment_id, Status: 'Success' }),
                    dataType: "json", headers: headers,
                    success: function (res) {
                        if (res.status) {
                            console.log("OPDPlansPurchaseConformation");
                            try {
                                ShowLoding(false);
                                opningPaymentSuccesspage();
                            } catch { }
                            resolve(res) // Resolve promise and go to then()
                        } else {
                            console.warn(res); reject("Error from Buy OPD Plan Conformation")
                        }
                    },
                    error: function (error) {
                        console.warn(error); reject(error) // Reject the promise and go to catch()
                    }
                });
            },
            "prefill": { "name": Name, "email": Email, "contact": "91" + MobileNo },
            "notes": {
                "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
            },
            "theme": { "color": "#3399cc" },
            "modal": {
                "ondismiss": function () {
                }
            }
        };
        try {
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                try {
                    ShowLoding(false);
                    opningPaymentfailedpage();
                } catch { }
                reject(response)
                console.warn(response.error);
            });
            rzp1.open();
            resolve("done");
        } catch (e) {
            reject(e);
            try {
                ShowLoding(false);
                opningPaymentfailedpage();
            } catch { }
        }
    });
}

