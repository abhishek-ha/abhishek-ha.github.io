
var ProductApiBaseUrl = "https://uat.healthassure.in/ProductApi/";

function GetEcomUserLoginURL(PlanCode, ServiceName = "", ClientId = 0) {
    return new Promise(function (resolve, reject) {
        var headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'DashboardApiKey': '3IzBsIlNNYx9DAF20vhsL6hngf1vxttGAwftGAzR71Olq0Epx7Bw' };
        $.ajax({
            type: "POST", url: ProductApiBaseUrl + "api/user/GetEcomUserLoginURL",
            data: JSON.stringify({ PlanCode: PlanCode, ServiceName: ServiceName, ClientId: ClientId }),
            dataType: "json", headers: headers,
            success: function (result) {
                if (result.status) {
                    window.location.href = result.results.loginURL;
                    resolve(result);
                } else {
                    console.warn(result); reject('Error Creating transaction Id from HealthAssure side') // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror); reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}


