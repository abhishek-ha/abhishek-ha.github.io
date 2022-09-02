// JavaScript source code
function GetPartnerPlanDetails(PartnerCode) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: 'https://localhost:44301/api/InsuranceAgent/GetPartnerPlanDetails?PartnerCode=' + PartnerCode,
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
            url: 'https://localhost:44301/api/OPDPlans/OPDPlansPurchase',
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
            url: 'https://localhost:44301/api/InsuranceAgent/GetTransactionDetails?TransactionId=' + TransactionId,
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

