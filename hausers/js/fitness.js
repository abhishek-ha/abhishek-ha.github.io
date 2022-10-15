var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName ='';
function LoadData(Appointmentid) {
    debugger;
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
            debugger;
            console.log('success');
            if (data.status && data.results != null) {
                 statusName =data.results.statusname;
                 if (statusName == 'Cancelled') {
                    $("#dvCancel").show();
                    $("#dvConfirm").hide();
                    $("#btnstatusname").attr("class", "btn btn-orange statusbtn");
                } else if (statusName == 'Confirmed'){
                    $("#dvCancel").hide();
                    $("#dvConfirm").show();
                    $("#btnstatusname").attr("class", "btn btn-orange statusbtn");
                    }
                    else if (statusName == 'Requested'){
                        debugger;
                    $("#dvCancel").hide();
                    $("#dvConfirm").show();
                    $("#btnstatusname").attr("class", "btn btn-grey statusbtn");
                    }
                $("#btnstatusname").text(' Appointment ' + data.results.statusname);
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtAppointmentDate").html('<img src="images/calendar-black.png"  class="boxicon">  ' + data.results.appointmentDate);
                $("#txtAppointmentTime").html('<img src="images/clock.png" class="boxicon"> ' + data.results.appointmentTime);
                $("#btnAge").text(data.results.memberAge + ' Years');
                $("#txtDurationForTest").html('<img src="images/clock.png" class="boxicon"> Under ' + data.results.durationforTest);
                $("#txtPointOfContact").text(data.results.PointOfContact);

                if (data.results.subFacilityName == 'WelnessCoach') {
                    $('#dvSideImage').html('<img src="images/fitness.png" class="img-fluid w-75 float-end"></img>');
                    $('#joinLink').html('Live Sessions Online <a href="' + data.results.joinLink + '"> <i class="fa-solid fa-link"></i> Join Now </a>')
                    $("#dvSessionLink").show();//dvSideImage consult
                    $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.subServiceDetails);
                    $("#dvTestListBtn").show();
                    $.each(data.results.coveredTests, function (key, value) {
                        $('#ulTest').append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                    });

                    $("#txtTrainerName").html('<span class="trainername">' + data.results.pointOfContact + '</span> ');
                    console.log(data.results.pointOfContact);
                    $("#dvFitnessAppDetails").show();
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

$(function () {debugger;
if (Appointmentid != undefined && Appointmentid != null) { 
    LoadData(Appointmentid);
    $('body').show();

 }
    else {
        window.location.replace("404.html");
    }
    console.log(Appointmentid);
    console.log("ready!");
});
