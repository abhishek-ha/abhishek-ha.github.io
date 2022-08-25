function PasswordValidation(password) {
    return new Promise(function (resolve, reject) {
        var href = new URL(window.location.href);
        var userId = href.searchParams.get("U");
        var source = href.searchParams.get("S");
        if (userId == null || userId == "" || source == null || source == "") {
            reject("invalid Url")
            return;
        }
        let userpass = { NewPassword: password, UserId: userId, Source: source };
        $.ajax({
            type: "POST",
            url: "https://live.healthassure.in/productapi/api/User/ChangingPassword",
            dataType: "json",
            data: JSON.stringify(userpass),
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
                reject(eror) // Reject the promise and go to catch()
            }
        });
    });
}