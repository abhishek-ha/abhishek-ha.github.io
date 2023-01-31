var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName ='';
function LoadData(Appointmentid) {
    $.ajax({
        url: "https://localhost:44301/api/UserOPDPlans/AppointmentBoardingPass?Appointmentid=" + Appointmentid,
        type: "GET",
        dataType: "json",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'ApiKey': 'joxNjM0MjE2NDQ5fQ.nk2tgCC1NRAbaperiPWQXXoNgybL27zdN3T4dC5L-ak'
        },
        success: function (data) {
            console.log('success');
            console.log(data.results);
            if (data.status && data.results != null) {
                 statusName =data.results.statusname;
                 if (statusName == 'Cancelled') { "[id*='dvAppointmentWith']"
                    $("[id*='dvCancel']").show();
                    $("[id*='dvConfirm']").hide();
                    $("[id*='btnstatusname']").attr("class", "btn btn-red statusbtn");
                } else if (statusName == 'Confirmed'){
                    $("[id*='dvCancel']").hide();
                    $("[id*='dvConfirm']").show();
                    $("[id*='btnstatusname']").attr("class", "btn btn-orange statusbtn");
                    }
                    else if (statusName == 'Requested'){
                    $("[id*='dvCancel']").hide();
                    $("[id*='dvConfirm']").show();
                    $("[id*='btnstatusname']").attr("class", "btn btn-grey statusbtn");
                    }
                $("[id*='btnstatusname']").text(' Appointment ' + data.results.statusname);
                $("[id*='txtMemberName']").html('Hi, ' + data.results.memberName);
                $("[id*='btnGender']").text(data.results.gender);
                $("[id*='txtAppointmentDate']").html('<img src="images/calendar-black.png"  class="boxicon">  ' + data.results.appointmentDate);
                $("[id*='txtAppointmentTime']").html('<img src="images/clock.png" class="boxicon"> ' + data.results.appointmentTime);
                $("[id*='btnAge']").text(data.results.memberAge + ' Years');
                $("[id*='txtDurationForTest']").html('<img src="images/clock.png" class="boxicon"> Under ' + data.results.durationforTest);
                $("[id*='txtPointOfContact']").text(data.results.PointOfContact);

                if (data.results.subFacilityName == 'WelnessCoach') {
                    $("[id*='dvSideImage']").html('<img src="images/fitness.png" class="img-fluid w-75 float-end"></img>');
                    $("[id*='joinLink']").html('Live Sessions Online <a href="' + data.results.joinLink + '"> <i class="fa-solid fa-link"></i> Join Now </a>')
                    $("[id*='dvSessionLink']").show();//dvSideImage consult
                    $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.subServiceDetails);
                    $("[id*='dvTestListBtn']").show();
                    $.each(data.results.coveredTests, function (key, value) {
                        $("[id*='ulTest']").append('<li><i class="fa-solid fa-circle-check text-success"></i>  <a href="#">' + value.testName + ' </a> </li>');
                    });

                    $("[id*='txtTrainerName']").html('<span class="trainername">' + data.results.pointOfContact + '</span> ');
                    console.log(data.results.pointOfContact);
                    $("[id*='dvFitnessAppDetails']").show();
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
