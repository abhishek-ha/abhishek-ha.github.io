
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

function BuyOPDPlan(Name, Email, MobileNo, DOB, Gender, PlanCode, PartnerOrderId, CouponCode, description, utm_Source, utm_Medium, utm_Campaign, utm_Term, utm_Content, Relations, Agent) {
    return new Promise(function (resolve, reject) {
        AddLogRocket(Email, { PlanCode: PlanCode, MobileNo: MobileNo, Description: description });
        var BaseUrl = "https://live.healthassure.in/ProductApi/"
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'PartnerOPDPlanApiKey': '14UGczJo0lYOe5ilSzlT2cvLTj1lymz2lRWaBCwIQMd=pnIKeTDBAYApRXj6xO' };
        $.ajax({
            type: "POST", url: BaseUrl + "api/OPDPlans/OPDPlansPurchase",
            data: JSON.stringify({ Name: Name, Email: Email, MobileNo: MobileNo, DOB: DOB, Gender: Gender, PlanCode: PlanCode, PartnerOrderId: PartnerOrderId, CouponCode: CouponCode, Status: 'BuyRequest', utmSource: utm_Source, utmMedium: utm_Medium, utmCampaign: utm_Campaign, utmTerm: utm_Term, utmContent: utm_Content, Relations: Relations, Agent: Agent }),
            dataType: "json", headers: headers,
            success: function (result) {
                AddLogRocket(Email, { PlanCode: PlanCode, log: "Paymant initiated" });
                if (result.status) {
                    var options = {
                        "key": result.results.razorpayOrder.key,
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
                                type: "POST", url: BaseUrl + "api/OPDPlans/OPDPlansPurchaseConformation",
                                data: JSON.stringify({ TransactionId: result.results.razorpayOrder.receipt, Message: "Payment Success", OrderId: result.results.razorpayOrder.id, Signature: response.razorpay_signature, RefId: response.razorpay_payment_id, Status: 'Success' }),
                                dataType: "json", headers: headers,
                                success: function (res) {
                                    if (res.status) {
                                        AddLogRocket(Email, { PlanCode: PlanCode, log: "plan purchased" });
                                        resolve(res) // Resolve promise and go to then()
                                        try {
                                            ShowLoding(false);
                                            opningPaymentSuccesspage(PlanCode);
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
                            "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
                        },
                        "theme": { "color": "#3399cc" },
                        "modal": {
                            "ondismiss": function () {
                                try {
                                    AddLogRocket(Email, { PlanCode: PlanCode, log: "ondismiss => userClosePaymentPopup" });
                                    userClosePaymentPopup();
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
            },
            error: function (eror) {
                AddLogRocket(Email, { PlanCode: PlanCode, log: "api=> api/OPDPlans/BuyOPDPlanWithRazorpay, Calling Error " });
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
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
