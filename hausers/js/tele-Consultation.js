var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName ='';
var reportsPath ='';
$('#btnViewReports').click(function () {
    window.open(reportsPath);
});
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
            console.log( data);
            if (data.status && data.results != null) {
                 statusName =data.results.statusname;
                 document.title = 'Tele Consultation | ' + data.results.statusname ;
                $("[id*='btnstatusname']").text(' Appoinment ' + data.results.statusname);
                $("[id*='txtMemberName']").html('Hi, ' + data.results.memberName);
                $("[id*='btnGender']").text(data.results.gender);
                $("[id*='txtModeOfConsultation']").text(data.results.modeOfConsultation + ' Consultation ');
                $("[id*='txtAppointmentDate']").html('<img src="images/calendar-black.png"  class="boxicon"> ' + data.results.appointmentDate);
                $("[id*='txtAppointmentTime']").html('<img src="images/clock.png" class="boxicon">' + data.results.appointmentTime);
                 $("[id*='btnAge']").text(data.results.memberAge + ' Years');
                $("[id*='txtplanName']").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.subServiceDetails);
                if (data.results.reportSavePath != null) {
                    reportsPath = data.results.reportSavePath;
                }
                if (statusName == 'Cancelled') {
                    $("[id*='btnstatusname']").attr("class", "btn btn-red");
                     $("[id*='dvCancelled']").show();
                }
                else if (statusName == 'Requested') {
                    $("[id*='btnstatusname']").css("background-color", "Blue");
                    $("[id*='dvRequested']").show();
                }
                else if (statusName == 'Completed' || data.results.statusname == 'Closed') {
                    $("[id*='btnstatusname']").css("background-color", "Green");
                    $("[id*='dvCompleted']").show();
                }
                else if (statusName == 'Confirmed') {
                    $("[id*='txtTrainerName']").html('<span class="trainername">' + data.results.pointOfContact + '</span> ');
                    $("[id*='btnstatusname']").attr("class", "btn btn-orange");
                    $("[id*='dvConfirmed']").show();
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
    $("[id*='dvRequested']").hide();
    $("[id*='dvCancelled']").hide();
    $("[id*='dvCompleted']").hide();
    $("[id*='dvConfirmed']").hide();

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
