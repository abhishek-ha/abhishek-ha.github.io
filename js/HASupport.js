// JavaScript source code

function SupportRaisedTicket(Name, MobileNo, Email, PolicyNo, Subject, Description) {
    // do something with data
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: 'https://live.healthassure.in/productApi/api/User/RaiseNewTicket',
            dataType: "json",
            data: JSON.stringify({ Name: Name, MobileNo: MobileNo, Email: Email, PolicyNo: PolicyNo, Subject: Subject, Description: Description }),
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

