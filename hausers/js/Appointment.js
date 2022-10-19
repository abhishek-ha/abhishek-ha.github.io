var reportsPath = '';
var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
function maplocation(lat, long) {
    window.open('https://maps.google.com/?q=' + lat + ',' + lat);
}
$('#btnViewReports').click(function () {
    window.open(reportsPath);
});
function LoadData(Appointmentid) {
    $.ajax({
        url: "https://uat.healthassure.in/productApi/api/UserOPDPlans/AppointmentBoardingPass?Appointmentid=" + Appointmentid,
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
                document.title = ' DI-Appointment ' + data.results.statusname;
                $("[id*='txtMemberName']").html('Hi, ' + data.results.memberName);
                $("[id*='btnGender']").text(data.results.gender);
                $("[id*='txtAppointmentDate']").html('<img src="images/calendar-black.png" class="boxicon"> ' + data.results.appointmentDate);
                // $("#txtAppointmentDate").attr('class','abc');
                $("[id*='txtAppointmentTime']").html(' <img src="images/clock.png" class="boxicon">  ' + data.results.appointmentTime);
                // $("#txtAddress").html(data.results.address + ' <img src="images/google-map.png" width="15" onclick="maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')">');
                $("[id*='txtAddress']").html(data.results.address + ' <a href="javascript:maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')"><br> <img src="images/google-map.png" class="boxicon"> Direction </a>');
                $("[id*='btnAge']").text(data.results.memberAge + ' Years');
                $("[id*='btnCaseNo']").text(data.results.caseNo);
                if (data.results.appointmentAddress != null && data.results.appointmentAddress != '') {
                    $("[id*='AppointmentAddress']").text(data.results.appointmentAddress);
                } else {
                    $("[id*='AppointmentAddressdiv']").hide();
                }
                $("[id*='btnCaseNoConfirmed']").text(data.results.caseNo);
                $("[id*='btnFasting']").text(data.results.isFasting);
                if (data.results.facilityCategoryIds != null && data.results.facilityCategoryIds != '') {
                    if (data.results.facilityCategoryIds.includes("1")) {
                        $("[id*='txtDurationForTest']").html(' <img src="images/clock.png" class="boxicon"> ' + '45 minutes');
                    } else if (data.results.facilityCategoryIds.includes("2")) {
                        $("[id*='txtDurationForTest']").html('  ' + '2 hours');
                    } else if (data.results.facilityCategoryIds.includes("2") || data.results.facilityCategoryIds.includes("2")) {
                        $("[id*='txtDurationForTest']").html(' <img src="images/clock.png" class="boxicon"> ' + '3 hours');
                    } else {
                        if (data.results.durationforTest == null) {
                            $("[id*='dvDurationForTest']").hide();
                        }
                        $("[id*='txtDurationForTest']").html('<img src="images/clock.png" class="boxicon"> ' + data.results.durationforTest);
                    }
                } else {
                    if (data.results.durationforTest == null) {
                        $("[id*='dvDurationForTest']").hide();
                    }
                    $("[id*='txtDurationForTest']").html(' <img src="images/clock.png" class="boxicon"> ' + data.results.durationforTest);
                }
                $("[id*='txtPaymentMode']").html('<img src="images/wallet.png" class="boxicon"> ' + data.results.paymentMode + ' , No payment to be given at center');
                if (data.results.preprationForCheckup != null && data.results.preprationForCheckup != '') {
                    $("[id*='txtPreprationForCheckup']").text(data.results.preprationForCheckup);
                }
                $("[id*='btnBreakfastCentre']").text(data.results.breakfastCentre);
                if (data.results.technicianGender != null && data.results.technicianGender != '') {
                    $("[id*='btnTechnician']").text(data.results.technicianGender);
                } else if (data.results.subServiceDetails.includes('ECG')) {
                    $("[id*='btnTechnician']").text('Female');
                }
                else {
                    $("[id*='Techniciandiv']").hide();
                }
                if (data.results.reportSharingwithCustomer != null && data.results.reportSharingwithCustomer != '') {
                    if (data.results.reportSharingwithCustomer.toLowerCase() == 'y') {
                        $("[id*='btnReportSharing']").text('YES');
                    }
                    else if (data.results.reportSharingwithCustomer.toLowerCase() == 'n') {
                        $("[id*='btnReportSharing']").text('NO');
                    }
                    else {
                        $("[id*='btnReportSharing']").text(data.results.reportSharingwithCustomer);
                    }
                }
                else {
                    $("[id*='divReportSharing']").hide();
                }

                $("[id*='btnPaymentSettlementMode']").html('<img src="images/wallet.png" class="boxicon1"> ' + 'Credit' + ' , No payment to be taken from customer');
                $("[id*='txtProviderName']").text(data.results.providerName);
                $("[id*='ProviderName']").text(data.results.providerName);
                $("[id*='txtProviderMobile']").html('<img src="images/call-black-icon.png" class="boxicon"> ' + data.results.providerMobile);
                $("[id*='txtProviderEmail']").html('<i class="fa-regular fa-envelope" ></i> ' + data.results.providerEmail);
                $("[id*='txtPointOfContact']").text(data.results.pointOfContact);
                if (data.results.appRecievedByEmail != null && data.results.appRecievedByEmail != '') {
                    $("[id*='AppRecievedByEmail']").text(data.results.appRecievedByEmail);
                }
                else {
                    $("[id*='AppRecievedByEmail']").text(data.results.providerEmail);
                }
                $("[id*='AppRecievedByMobile']").text(data.results.appRecievedByMobile);
                $("[id*='AppRecivedByName']").text(data.results.appRecivedByName);
                $("[id*='PocDesignation']").text(data.results.pocDesignation);
                $("[id*='PocMobile']").text(data.results.pocMobile);
                $("[id*='PocEmail']").text(data.results.pocEmail);
                if (data.results.reportSavePath != null) {
                    reportsPath = data.results.reportSavePath;
                }
                if (data.results.providerImage == null) {
                    var providerNamearr = data.results.providerName.split(' ');
                    var intials = providerNamearr[0].charAt(0);
                    if (providerNamearr.length > 0) {
                        intials += providerNamearr[1].charAt(0);
                    }
                    $("[id*='imgProviderImage']").html('<div id="profileImage">' + intials + '</div>');
                } else {
                    $("[id*='imgProviderImage']").html('<img src="' + data.results.providerImage + '" class="img-fluid" alt="">');
                }
                if (data.results.pointOfContact == null) {
                    $("[id*='dvPointOfContact']").hide();
                }
                //if (data.results.preprationForCheckup == null) {
                ///$("#dvPreprationForCheckup").hide();
                //}
                try {
                    var package = '';
                    let packageposition = data.results.subServiceDetails.search(/:-/);
                    if (packageposition != -1) {
                        let result = data.results.subServiceDetails.substring(0, packageposition).lastIndexOf(",");
                        if (result != -1) {
                            package = data.results.subServiceDetails.substring(result + 1, packageposition)
                        } else {
                            package = data.results.subServiceDetails.substring(0, packageposition)
                        }
                        data.results.subServiceDetails = data.results.subServiceDetails.replace(package, "").replace(":-", "");
                    }
                    var testArray = data.results.subServiceDetails.split(",");
                    if (package == '' || package == null) {
                        package = 'Lab Tests & Scans';
                    }
                    $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + package);
                    $("[id*='dvTestListBtn']").show();

                    $.each(testArray, function (key, value) {
                        $("[id*='ulTest']").append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value + ' </a> </li>');
                    });
                } catch {
                    if (data.results.coveredTests != null && data.results.coveredTests.length > 0) {
                        if (data.results.coveredTests.length == 1) {
                            $.each(data.results.coveredTests, function (key, value) {
                                // $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                                $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + value.testName);
                            });
                        }
                        else {
                            $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.coveredTests[0].testName);
                            $("[id*='dvTestListBtn']").show();

                            $.each(data.results.coveredTests, function (key, value) {
                                $("[id*='ulTest']").append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                            });
                        }
                    }
                    else {
                        $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.coveredTests[0].testName);
                    }
                }
                if (data.results.statusname.toLowerCase() == 'cancelled') {
                    $("[id*='btnstatusname']").text(' Appointment ' + data.results.statusname);
                    $("[id*='btnstatusname']").attr('class', 'btn btn-red statusbtn');
                    $("[id*='dvForCancelImage']").show();
                    $("[id*='divCancelCaseNo']").show();
                }
                else if (data.results.statusname.toLowerCase() == 'requested') {
                    $("[id*='btnstatusname']").text(' Appointment ' + data.results.statusname);
                    $("[id*='btnstatusname']").attr('class', 'btn btn-grey statusbtn');
                    $("[id*='dvForRequestImage']").show();
                }
                else if (data.results.statusname.toLowerCase() == 'completed' || data.results.statusname.toLowerCase() == 'closed') {
                    $("[id*='btnstatusname']").text(' Appointment ' + data.results.statusname);
                    $("[id*='btnstatusname']").attr('class', 'btn btn-grey statusbtn');
                    $("[id*='dvForCompletedImage']").show();
                }
                else if (data.results.statusname.toLowerCase() == 'confirmed') {
                    $("[id*='btnstatusname']").text(' Appointment ' + data.results.statusname);
                    $("[id*='btnstatusname']").attr('class', 'btn btn-orange statusbtn');
                    $("[id*='dvAppointmentConfirmed']").show();
                    $("[id*='dvForConfirm']").show();;
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
    $("[id*='dvTestListBtn']").show();
    $("[id*='dvAppointmentConfirmed']").hide();
    $("[id*='dvForConfirm']").hide();
    $("[id*='dvForCancelImage']").hide();
    $("[id*='dvForRequestImage']").hide();
    $("[id*='dvForCompletedImage']").hide();
    $("[id*='dvCaseNo']").hide();
    $('body').hide();
    debugger;
    if (Appointmentid != undefined && Appointmentid != null) {
        debugger;
        LoadData(Appointmentid);
        $('body').show();
    }
    else {
        window.location.replace("404.html");
    }
    console.log(Appointmentid);
    console.log("ready!");
});
