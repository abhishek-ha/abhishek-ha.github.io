function getUrlVars(url = window.location.href) {
    var vars = [], hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function SaveCallbackAdvisor(Phone, Name, Email, Source) {
    return new Promise(function (resolve, reject) {
        var Vars = getUrlVars();
        UtmSource = Vars["utmSource"];
        if (Vars["utmSource"] == null) {
            UtmSource = Source;
        }
        let AdvisorObj = {
            mobileNo: Phone, name: Name, dob: "2000-01-01", email: Email, utmSource: UtmSource, utmMedium: Vars["utmMedium"], utmCampaign: Vars["utmCampaign"], utmTerm: Vars["utmTerm"],
            utmContent: Vars["utmContent"]
        };
        $.ajax({
            type: "POST",
            url: "https://live.healthassure.in/ProductApi/api/User/CallbackAdvisor",
            data: JSON.stringify(AdvisorObj),
            dataType: "json",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (result) {
                console.warn(result.message);
                resolve(result) // Resolve promise and go to then() 
            },
            error: function (eror) {
                console.warn(eror);
                reject(err) // Reject the promise and go to catch()
            }
        });
    });
}
