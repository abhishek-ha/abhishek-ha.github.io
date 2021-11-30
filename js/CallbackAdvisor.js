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
        UtmSource = Vars["utm_source"];
        if (Vars["utm_source"] == null) {
            UtmSource = Source;
        }
        let AdvisorObj = {
            mobileNo: Phone, name: Name, dob: "2000-01-01", email: Email, utmSource: UtmSource, utmMedium: Vars["utm_medium"], utmCampaign: Vars["utm_campaign"], utmTerm: Vars["utm_term"],
            utmContent: Vars["utm_content"]
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

function UserTracking(MobileNo, sub1 = null) {
    if (sub1 == null) {
        sub1 = Date.now();
    }
    $('body').append("<iframe src='https://tracking.icubeswire.co/aff_a?offer_id=2617&adv_sub1=" + sub1 + "&adv_sub2=" + MobileNo + "' width='1' height='1' id='pixelcodeurl' /></iframe>");
}