
var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("Appointmentid");
function maplocation(lat, long) {
    window.open('https://maps.google.com/?q=' + lat + ',' + lat);
}
function ViewRepots(reportSavePath) {
    window.location.replace(reportSavePath);
}

function LoadData(Appointmentid) {
    $.ajax({
        url: "https://live.healthassure.in/productApi/api/UserOPDPlans/AppointmentBoardingPass?Appointmentid=" + Appointmentid,
        type: "GET",
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
        },
        success: function (data) {
            console.log('success');
            if (data.status && data.results != null) {
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtAppointmentDate").html('<i class="fa-solid fa-calendar-check"></i> ' + data.results.appointmentDate);
                $("#txtAppointmentTime").html('<i class="fa-solid fa-clock"></i> ' + data.results.appointmentTime);
                $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.planName);
                $("#txtAddress").html(data.results.address + ' <img src="images/google-map.png" width="15" onclick="maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')">');
                $("#btnAge").text(data.results.memberAge + ' Years');
                $("#btnCaseNo").text(data.results.caseNo);
                $("#btnCaseNoConfirmed").text(data.results.caseNo);
                $("#btnFasting").text(data.results.isFasting);
                $("#txtDurationForTest").html('<i class="fa-solid fa-clock"></i>' + data.results.durationforTest);
                $("#txtPaymentMode").html('<i class="fa-solid fa-box-archive"></i> ' + data.results.paymentMode);
                $("#txtPreprationForCheckup").text(data.results.preprationForCheckup);
                $("#btnBreakfastCentre").text(data.results.breakfastCentre);
                $("#btnTechnician").text(data.results.technicianGender);
                $("#btnReportSharing").text(data.results.reportSharingwithCustomer);
                $("#btnPaymentSettlementMode").html('<i class="fa-solid fa-box-archive"></i> ' + data.results.paymentSettlementMode);
                $("#txtProviderName").text(data.results.providerName);
                $("#txtProviderMobile").html('<i class="fa-solid fa-phone"></i> ' + data.results.providerMobile);
                $("#txtProviderEmail").html('<i class="fa-solid fa-envelope"></i> ' + data.results.providerEmail);
                $("#txtPointOfContact").text(data.results.PointOfContact);
                if (data.results.reportSavePath != null) {
                    console.log(data.results.reportSavePath)
                    $("#btnViewReports").html('<button class="btn btn-reports" onclick="javascript:ViewRepots(' + data.results.reportSavePath + ')"> View Reports </button>');
                }

                if (data.results.providerImage == null) {
                    $("#imgProviderImage").hide();
                } else {
                    $("#imgProviderImage").html('<img src="' + data.results.providerImage + 'images/apollo-logo.png" class="img-fluid">');
                }
                if (data.results.PointOfContact == null) {
                    $("#dvPointOfContact").hide();
                } if (data.results.durationforTest == null) {
                    $("#dvDurationForTest").hide();
                } if (data.results.preprationForCheckup == null) {
                    $("#dvPreprationForCheckup").hide();
                }
                if (data.results.coveredTests != null && data.results.coveredTests.length > 0) {
                    $("#dvTestListBtn").show();
                    $.each(data.results.coveredTests, function (key, value) {
                        $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i> Advance Health Checkup <a href="#">' + value.testName + ' </a> </li>');
                    });
                }
                if (data.results.statusname == 'Cancelled') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").css("background-color", "Red");
                    $("#dvForCancelImage").show();
                }
                else if (data.results.statusname == 'Requested') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").css("background-color", "Blue");
                    $("#dvForRequestImage").show();
                }
                else if (data.results.statusname == 'Completed' || data.results.statusname =='Closed') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").css("background-color", "Green");
                    $("#dvForCompletedImage").show();
                }
                else if (data.results.statusname == 'Confirmed') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").css("background-color", "Orange");
                    $("#dvAppointmentConfirmed").show();
                    $("#dvForConfirm").show();;
                }
                else {
                    console.log("Error in status not matched");
                    window.open("404.html");
                }
            } else {
                console.log("Error in sucess");
                window.location.replace("404.html");
            }
        },
        error: function () {
            console.log("Error");
            window.location.replace("404.html");
            swal('Error occure');
        }
    });

}

$(function () {
    $("#dvTestListBtn").hide();
    $("#dvAppointmentConfirmed").hide();
    $("#dvForConfirm").hide();
    $("#dvForCancelImage").hide();
    $("#dvForRequestImage").hide();
    $("#dvForCompletedImage").hide();
    $("#dvCaseNo").hide();
    if (Appointmentid != undefined && Appointmentid != null) { LoadData(Appointmentid); }
    else {
        window.location.replace("404.html");
    }
    console.log(Appointmentid);
    console.log("ready!");
});
