
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

function BuyOPDPlan(TransactionId, razorpaykey, amount, order_id, description, Name, Email, MobileNo, image, Cname) {
    return new Promise(function (resolve, reject) {
        var BaseUrl = "https://live.healthassure.in/ProductApi/"
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'PartnerOPDPlanApiKey': '14UGczJo0lYOe5ilSzlT2cvLTj1lymz2lRWaBCwIQMd=pnIKeTDBAYApRXj6xO' };
        var options = {
            "key": razorpaykey,
            "amount": amount,
            "currency": "INR",
            "name": "HealthAssure",
            "description": description,
            "image": BaseUrl + "image/logo/halogo.png",
            "order_id": order_id,
            "handler": function (response) {
                $.ajax({
                    type: "POST", url: BaseUrl + "api/OPDPlans/OPDPlansPurchaseConformation",
                    data: JSON.stringify({ TransactionId: TransactionId, Message: "Payment Success", OrderId: order_id, Signature: response.razorpay_signature, RefId: response.razorpay_payment_id, Status: 'Success' }),
                    dataType: "json", headers: headers,
                    success: function (res) {
                        if (res.status) {
                            console.log("OPDPlansPurchaseConformation");
                            console.log(res);
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
                reject(response)
                console.warn(response.error);
            });
            rzp1.open();
            resolve("done");
        } catch (e) {
            reject(e);
        }

    });
}
