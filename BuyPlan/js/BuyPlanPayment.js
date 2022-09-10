
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();

function BuyOPDPlan(TransactionId, razorpaykey, amount, order_id, description, Name, Email, MobileNo, Cname) {
    return new Promise(function (resolve, reject) {
        var logo = '';
        var color = '#3399cc';
        if (Cname == '' || Cname == null || Cname == undefined) {
            Cname = 'HealthAssure';
        }
        if (Cname == 'RenewBuy' || Cname == 'Renewbuy') {
            logo = 'https://www.renewbuy.com/assets/rb-home/logo_rb.png';
            color = '#fc8704';
            Cname = 'RenewBuy';
        } else {
            logo = 'https://live.healthassure.in/ProductApi/image/logo/halogo.png';
            color = '#3399cc';
        }
        var BaseUrl = "https://live.healthassure.in/ProductApi/"
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'PartnerOPDPlanApiKey': '14UGczJo0lYOe5ilSzlT2cvLTj1lymz2lRWaBCwIQMd=pnIKeTDBAYApRXj6xO' };
        var options = {
            "key": razorpaykey,
            "amount": amount,
            "currency": "INR",
            "name": Cname,
            "description": description?.replaceAll('%20',' '),
            "image": logo,
            "order_id": order_id,
            "handler": function (response) {
                $.ajax({
                    type: "POST", url: BaseUrl + "api/OPDPlans/OPDPlansPurchaseConformation",
                    data: JSON.stringify({ TransactionId: TransactionId, Message: "Payment Success", OrderId: order_id, Signature: response.razorpay_signature, RefId: response.razorpay_payment_id, Status: 'Success' }),
                    dataType: "json", headers: headers,
                    success: function (res) {
                        if (res.status) {
                            EventReactNative('SUCCESSFUL', res);
                            console.log("OPDPlansPurchaseConformation");
                            console.log(res);
                            resolve(res) // Resolve promise and go to then()
                        } else {
                            EventReactNative('FAILURE', '');
                            console.warn(res); reject("Error from Buy OPD Plan Conformation")
                        }
                    },
                    error: function (error) {
                        EventReactNative('FAILURE', '');
                        console.warn(error); reject(error) // Reject the promise and go to catch()
                    }
                });
            },
            "prefill": { "name": Name, "email": Email, "contact": "91" + MobileNo },
            "notes": {
                "address": "Registered Office : 1st Floor, Excom House, North Wing, 7 Saki-vihar Road, Sakinaka, Andheri(E), Mumbai-400 072"
            },
            "theme": { "color": color },
            "modal": {
                "ondismiss": function () {
                    EventReactNative('CANCELLED', '');
                }
            }
        };
        try {
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                reject(response)
                console.warn(response.error);
            });
            rzp1.open();
            resolve("done");
        } catch (e) {
            EventReactNative('FAILURE', '');
            reject(e);
        }

    });
}
function EventReactNative(Message, PaymentData) {
    try {
        var data = JSON.stringify({ paymentstaus: Message, paymentData: PaymentData });
        console.log("EventReactNative:- " + data);
        window.postMessage(data, "*");
        window.ReactNativeWebView.postMessage(data);
    } catch (e) { console.log(e); }
}
