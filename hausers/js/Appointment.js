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
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtAppointmentDate").html('<img src="images/calendar-black.png" class="boxicon"> ' + data.results.appointmentDate);
                // $("#txtAppointmentDate").attr('class','abc');
                $("#txtAppointmentTime").html(' <img src="images/clock.png" class="boxicon">  ' + data.results.appointmentTime);
                // $("#txtAddress").html(data.results.address + ' <img src="images/google-map.png" width="15" onclick="maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')">');
                $("#txtAddress").html(data.results.address + ' <a href="javascript:maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')"><img src="images/google-map.png" class="boxicon">Location </a>');
                $("#btnAge").text(data.results.memberAge + ' Years');
                $("#btnCaseNo").text(data.results.caseNo);
                $("#btnCaseNoConfirmed").text(data.results.caseNo);
                $("#btnFasting").text(data.results.isFasting);
                if (data.results.facilityCategoryIds != null && data.results.facilityCategoryIds != '') {
                    if (data.results.facilityCategoryIds.includes("1")) {
                        $("#txtDurationForTest").html(' <i class="fa-regular fa-clock boxicon"></i> ' + '45 minutes');
                    } else if (data.results.facilityCategoryIds.includes("2")) {
                        $("#txtDurationForTest").html(' <i class="fa-regular fa-clock boxicon"></i> ' + '2 hours');
                    } else if (data.results.facilityCategoryIds.includes("2") || data.results.facilityCategoryIds.includes("2")) {
                        $("#txtDurationForTest").html(' <i class="fa-regular fa-clock boxicon"></i> ' + '3 hours');
                    } else {
                        if (data.results.durationforTest == null) {
                            $("#dvDurationForTest").hide();
                        }
                        $("#txtDurationForTest").html(' <i class="fa-regular fa-clock boxicon"></i> ' + data.results.durationforTest);
                    }
                } else {
                    if (data.results.durationforTest == null) {
                        $("#dvDurationForTest").hide();
                    }
                    $("#txtDurationForTest").html(' <i class="fa-regular fa-clock boxicon"></i> ' + data.results.durationforTest);
                }
                $("#txtPaymentMode").html('<img src="images/wallet.png" class="boxicon"> ' + data.results.paymentMode + ' , No payment to be ginven at center');
                if (data.results.preprationForCheckup != null && data.results.preprationForCheckup != '') {
                    $("#txtPreprationForCheckup").text(data.results.preprationForCheckup);
                }
                $("#btnBreakfastCentre").text(data.results.breakfastCentre);
                if (data.results.technicianGender != null && data.results.technicianGender != '') {
                    $("#btnTechnician").text(data.results.technicianGender);
                } else if (data.results.subServiceDetails.includes('ECG')) {
                    $("#btnTechnician").text('Female');
                }
                else {
                    $('#Techniciandiv').hide();
                }
                if (data.results.reportSharingwithCustomer != null && data.results.reportSharingwithCustomer != '') {
                    if (data.results.reportSharingwithCustomer.toLowerCase() == 'y') {
                        $("#btnReportSharing").text('YES');
                    }
                    else if (data.results.reportSharingwithCustomer.toLowerCase() == 'n') {
                        $("#btnReportSharing").text('NO');
                    }
                    else {
                        $("#btnReportSharing").text(data.results.reportSharingwithCustomer);
                    }
                }
                else {
                    $('#divReportSharing').hide();
                }

                $("#btnPaymentSettlementMode").html('<img src="images/wallet.png" class="boxicon1"> ' + data.results.paymentSettlementMode + ' , No payment to be tacken from customer');
                $("#txtProviderName").text(data.results.providerName);
                $("#txtProviderMobile").html('<img src="images/call-black-icon.png" class="boxicon"> ' + data.results.providerMobile);
                $("#txtProviderEmail").html('<i class="fa-regular fa-envelope" ></i> ' + data.results.providerEmail);
                $("#txtPointOfContact").text(data.results.pointOfContact);
                if (data.results.appRecivedByName != null && data.results.appRecivedByName != '') {
                    $('#AppRecivedByName').text(data.results.appRecivedByName);
                }
                else {
                    $('#AppRecivedByName').text(data.results.providerEmail);
                }
                $('#AppRecievedByMobile').text(data.results.appRecievedByMobile);
                $('#AppRecievedByEmail').text(data.results.appRecievedByEmail);
                $('#PocDesignation').text(data.results.pocDesignation);
                $('#PocMobile').text(data.results.pocMobile);
                $('#PocEmail').text(data.results.pocEmail);
                if (data.results.reportSavePath != null) {
                    reportsPath = data.results.reportSavePath;
                }
                if (data.results.providerImage == null) {
                    var providerNamearr = data.results.providerName.split(' ');
                    var intials = providerNamearr[0].charAt(0);
                    if (providerNamearr.length > 0) {
                        intials += providerNamearr[1].charAt(0);
                    }
                    $("#imgProviderImage").html('<div id="profileImage">' + intials + '</div>');
                } else {
                    $("#imgProviderImage").html('<img src="' + data.results.providerImage + '" class="img-fluid" alt="">');
                }
                if (data.results.pointOfContact == null) {
                    $("#dvPointOfContact").hide();
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
                        package = testArray[0];
                    }
                    $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + package);
                    $("#dvTestListBtn").show();

                    $.each(testArray, function (key, value) {
                        $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value + ' </a> </li>');
                    });
                } catch {
                    if (data.results.coveredTests != null && data.results.coveredTests.length > 0) {
                        if (data.results.coveredTests.length == 1) {
                            $.each(data.results.coveredTests, function (key, value) {
                                // $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                                $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + value.testName);
                            });
                        }
                        else {
                            $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.coveredTests[0].testName);
                            $("#dvTestListBtn").show();

                            $.each(data.results.coveredTests, function (key, value) {
                                $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                            });
                        }
                    }
                    else {
                        $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.coveredTests[0].testName);
                    }
                }
                if (data.results.statusname.toLowerCase() == 'cancelled') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").attr('class', 'btn btn-red statusbtn');
                    $("#dvForCancelImage").show();
                }
                else if (data.results.statusname.toLowerCase() == 'requested') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").attr('class', 'btn btn-grey statusbtn');
                    $("#dvForRequestImage").show();
                }
                else if (data.results.statusname.toLowerCase() == 'completed' || data.results.statusname.toLowerCase() == 'closed') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").attr('class', 'btn btn-grey statusbtn');
                    $("#dvForCompletedImage").show();
                }
                else if (data.results.statusname.toLowerCase() == 'confirmed') {
                    $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                    $("#btnstatusname").attr('class', 'btn btn-orange statusbtn');
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
    $("#dvTestListBtn").show();
    $("#dvAppointmentConfirmed").hide();
    $("#dvForConfirm").hide();
    $("#dvForCancelImage").hide();
    $("#dvForRequestImage").hide();
    $("#dvForCompletedImage").hide();
    $("#dvCaseNo").hide();
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
