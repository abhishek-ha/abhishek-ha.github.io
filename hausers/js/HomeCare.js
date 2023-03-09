var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName = '';
var place = '';

$(function () {
    $("[id*='dvAppointmentWith']").hide();
    $("[id*='dvFasting']").hide();
    $("[id*='dvConfirmed']").hide();
    $("[id*='dvCancelled']").hide();
    $("[id*='dvCompleted']").hide();
    $("[id*='dvRequested']").hide();
    if (Appointmentid != undefined && Appointmentid != null) { LoadData(Appointmentid); }
    else {
        window.location.replace("404.html");
    }
});



function LoadData(Appointmentid) {
    debugger;
    $.ajax({
        url: "https://uat.healthassure.in/ProductApi/api/UserOPDPlans/AppointmentBoardingPass?Appointmentid=" + Appointmentid,
        type: "GET",
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
        },
        success: function (data) {
            if (data.status && data.results != null) {
                statusName = data.results.statusname;
                place = data.results.appointmentAddress;

                if (statusName == 'Requested') {
                    document.title = ' Home Care Requested';
                    $("[id*='dvRequested']").show();
                    $("[id*='btnstatusname']").attr('class', 'btn btn-grey statusbtn');
                    $("[id*='imgHomeCare']").attr('class', 'img-fluid float-end');
                }
                else if (statusName == 'completed' || statusName == 'closed') {
                    document.title = ' Home Care completed';
                    $("[id*='dvCompleted']").show();
                    $("[id*='btnstatusname']").attr('class', 'btn btn-grey statusbtn');
                    $("[id*='dvAppointmentWith']").show();
                }
                else if (statusName == 'Cancelled') {
                    document.title = ' Home Care Cancelled';
                    $("[id*='dvCancelled']").show();
                    $("[id*='btnstatusname']").attr('class', 'btn btn-red statusbtn');
                }
                else if (statusName == 'Confirmed') {
                    document.title = ' Home Care ';
                    $("[id*='dvConfirmed']").show();
                    $("[id*='dvAppointmentWith']").show();
                    $("[id*='dvFasting']").show();
                    $("[id*='btnstatusname']").attr('class', 'btn btn-orange statusbtn');
                }

                $("[id*='btnstatusname']").text('Appoinment ' + data.results.statusname);
                $("[id*='txtMemberName']").html('Hi, ' + data.results.memberName);
                $("[id*='btnGender']").text(data.results.gender);
                $("[id*='txtAppointmentDate']").html('<img src="images/calendar-black.png" class="boxicon"> ' + data.results.appointmentDate);
                $("[id*='txtAppointmentTime']").html('<img src="images/clock.png" class="boxicon"> ' + data.results.appointmentTime);
                $("[id*='btnAge']").text(data.results.memberAge + ' Years');
                $("[id*='btnCaseNo']").text(data.results.caseNo);
                $("[id*='appointmentFor']").text(data.results.subServiceDetails);
                $("[id*='doctname']").text(data.results.doctorName);
                $("[id*='designation']").text(data.results.doctorName);
                $("[id*='btnFasting']").text(data.results.isFasting);
                $("[id*='btnCaseNoConfirmed']").text(data.results.caseNo);
                $("[id*='btnPaymentSettlementMode']").text(data.results.paymentMode);
                $("[id*='txtProviderName']").text(data.results.providerName);
                $("[id*='txtProviderEmail']").html('<i class="fa-regular fa-envelope" ></i> ' + data.results.providerEmail);
                $("[id*='txtProviderMobile']").html('<img src="images/call-black-icon.png" class="boxicon"> ' + data.results.providerMobile);
                $("[id*='txtPaymentMode']").html('<img src="images/wallet.png" class="boxicon">' + data.results.paymentMode);
                $("[id*='custAddress']").html(place + ' <a href="javascript:maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')"><img src="images/google-map.png" class="boxicon"> Location </a>');
            } else {
                window.location.replace("404.html");
            }
        },
        error: function () {
            window.location.replace("404.html");
            swal('Error occure');
        }
    });

}

// $('#mapLogo').click(function () {
//     window.open('https://www.google.com/maps/place/' + place);});

function maplocation(lat, long) {
    window.open('https://maps.google.com/?q=' + lat + ',' + lat);
}



