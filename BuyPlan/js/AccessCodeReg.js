var baseUrl = 'https://live.healthassure.in/ProductApi/'
function CreateUserWithAccessCode(accessCode, firstName, lastName, gender, mobileNumbar, emailId, dOB, relative, triggerType) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: baseUrl + "api/User/LogInWithAccessCode",
            dataType: "json",
            data: JSON.stringify({ AccessCode: accessCode, FirstName: firstName, LastName: lastName, Gender: gender, MobileNumbar: mobileNumbar, EmailId: emailId, DOB: dOB, Relations: relative, TriggerType: triggerType }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
            },
            success: function (result) {
                console.warn(result.message);
                if (result.status) {
                    resolve(result);
                } else {
                    console.warn(result); reject(result) // Reject the promise and go to catch()
                }
            },
            error: function (eror) {
                console.warn(eror);
                reject(eror)
                //reject(err) // Reject the promise and go to catch()
            }
        });
    });
}

function LogInWithAccessCodeConfirmation(otp, registrationId) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: baseUrl + "api/User/LogInWithAccessCodeConfirmation",
            dataType: "json",
            data: JSON.stringify({ RegistrationId: registrationId, OTP: otp }),
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
