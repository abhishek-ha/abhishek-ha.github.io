
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

var BaseUrl = "https://uat.healthassure.in/ProductApi/"

async function BuyOPDPlan(Name, Email, MobileNo, DOB, Gender, PlanCode, CouponCode, description, utm_Source, utm_Medium, utm_Campaign, utm_Term, utm_Content, Relations, Agent, clientIP, GHDTNCAccepted, TNCAccepted, Address, RiderCode) {
    var latitude = '', longitude = '';
    try {
        var os = getCurrentOS();
        if (os == "Windows" || os == "Mac OS" || os == "Linux") {
            getLocation().then((loc) => {
                latitude = loc.coords.latitude;
                longitude = loc.coords.longitude;
            });
        }
        else {
            var loc = await getLocation();
            latitude = loc.coords.latitude;
            longitude = loc.coords.longitude;
        }
    } catch (err) {
        console.log(err.message);
    }
    return new Promise(function (resolve, reject) {
        AddLogRocket(Email, { PlanCode: PlanCode, MobileNo: MobileNo, Description: description });
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak' };
        $.ajax({
            type: "POST", url: BaseUrl + "api/OPDPlans/BuyOPDPlanWithRazorpay",
            data: JSON.stringify({ Name: Name, Email: Email, MobileNo: MobileNo, DOB: DOB, Gender: Gender, PlanCode: PlanCode, CouponCode: CouponCode, Status: 'BuyRequest', utmSource: utm_Source, utmMedium: utm_Medium, utmCampaign: utm_Campaign, utmTerm: utm_Term, utmContent: utm_Content, Relations: Relations, Agent: Agent, UserPurchaseLatitude: String(latitude), UserPurchaseLongitude: String(longitude), ClientIP: clientIP, GHDTNCAccepted: GHDTNCAccepted, TNCAccepted: TNCAccepted, UserAddress : Address, RiderCode: RiderCode}),
            dataType: "json", headers: headers,
            success: function (result) {
                try {
                    if (PlanCode == "HAOPDR003-60") {
                        try {
                            ShowLoding(false);
                            opningPaymentSuccesspage(null, null)
                            return;
                        } catch { }
                    }
                    AddLogRocket(Email, { PlanCode: PlanCode, log: "Paymant initiated" });
                    if (result.status) {
                        var options = {
                            "key": result.results.razorpayKey,
                            "amount": result.results.transaction.amountIncludingGST,
                            "currency": result.results.razorpayOrder.currency,
                            "name": "HealthAssure",
                            "description": description,
                            "image": BaseUrl + "image/logo/halogo.png",
                            "order_id": result.results.razorpayOrder.id,
                            "handler": function (response) {
                                AddLogRocket(Email, { PlanCode: PlanCode, log: "Paymant Success" });
                                try {
                                    ShowLoding(true);
                                } catch { }
                                $.ajax({
                                    type: "POST", url: BaseUrl + "api/OPDPlans/BuyOPDPlanConformationWithRazorpay",
                                    data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, RefId: response.razorpay_payment_id, Status: 'Success' }),
                                    dataType: "json", headers: headers,
                                    success: function (res) {
                                        if (res.status) {
                                            AddLogRocket(Email, { PlanCode: PlanCode, log: "plan purchased" });
                                            resolve(res) // Resolve promise and go to then() 
                                            try {
                                                ShowLoding(false);
                                                opningPaymentSuccesspage(PlanCode, result.results.razorpayOrder.receipt);
                                            } catch { }
                                        } else {
                                            AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanConformationWithRazorpay, Error ", result: res });
                                            console.warn(res); reject("Error from Buy OPD Plan Conformation")
                                        }
                                    },
                                    error: function (error) {
                                        AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanConformationWithRazorpay, calling Error ", TransactionId: result.results.razorpayOrder.receipt });
                                        console.warn(error); reject(error) // Reject the promise and go to catch()
                                    }
                                });
                            },
                            "prefill": { "name": Name, "email": Email, "contact": "91" + MobileNo },
                            "notes": {
                                "transactionId": result.results.razorpayOrder.receipt,
                                "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                            },
                            "theme": { "color": "#3399cc" },
                            "modal": {
                                "ondismiss": function () {
                                    try {
                                        userClosePaymentPopup();
                                        AddLogRocket(Email, { PlanCode: PlanCode, log: "ondismiss => userClosePaymentPopup" });
                                    } catch { }
                                }
                            }
                        };
                        var rzp1 = new Razorpay(options);
                        rzp1.on('payment.failed', function (response) {
                            AddLogRocket(Email, { PlanCode: PlanCode, TransactionId: result.results.razorpayOrder.receipt, log: "payment.failed, Error ", result: response });
                            console.warn(response.error);
                        });
                        rzp1.open();
                        try {
                            opningPaymentpage();
                        } catch { }
                    } else {
                        AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanWithRazorpay, Error ", result: result });
                        console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                    }
                } catch (e) {
                    AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanWithRazorpay, Calling Error " });
                    console.log(e);
                }
            },
            error: function (eror) {
                AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanWithRazorpay, Calling Error " });
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}

function GetOPDRiderBenefits(RiderCode) {
    return new Promise(function (resolve, reject) {
        ShowLoding(true);
        $.ajax({
            type: "GET",
            url: BaseUrl + "api/OPDPlans/GetOPDRiderBenefits?RiderCode=" + RiderCode,
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

function AddLogRocket(email, objectLog) {
    try {
        LogRocket.identify(email, objectLog);
        LogRocket.log(email, objectLog);
    } catch { }
}
//function to get location from user browser
async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        );
    });
};

function getCurrentOS() {
    try {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        return os;
    }
    catch (e) {
        return null;
    }
} 
