// JavaScript source code
function GetPartnerPlanDetails(PartnerCode) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: 'https://uat.healthassure.in/ProductApi/api/InsuranceAgent/GetPartnerPlanDetails?PartnerCode=' + PartnerCode,
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
