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
                $("#btnstatusname").text(' Appoinment ' + data.results.statusname);
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtModeOfConsultation").text(data.results.modeOfConsultation + ' Consultation ');
                $("#txtAppointmentDate").html('<img src="images/calendar-black.png"  class="boxicon"> ' + data.results.appointmentDate);
                $("#txtAppointmentTime").html('<img src="images/clock.png" class="boxicon">' + data.results.appointmentTime);
                 $("#btnAge").text(data.results.memberAge + ' Years');
                $("#txtplanName").html('<i class="fa-solid fa-circle-check text-success"></i> ' + data.results.subServiceDetails);
                if (data.results.reportSavePath != null) {
                    reportsPath = data.results.reportSavePath;
                }
                if (statusName == 'Cancelled') {
                    $("#btnstatusname").attr("class", "btn btn-red");
                     $("#dvCancelled").show();
                }
                else if (statusName == 'Requested') {
                    $("#btnstatusname").css("background-color", "Blue");
                    $("#dvRequested").show();
                }
                else if (statusName == 'Completed' || data.results.statusname == 'Closed') {
                    $("#btnstatusname").css("background-color", "Green");
                    $("#dvCompleted").show();
                }
                else if (statusName == 'Confirmed') {
                    $("#txtTrainerName").html('<span class="trainername">' + data.results.pointOfContact + '</span> ');
                    $("#btnstatusname").attr("class", "btn btn-orange");
                    $("#dvConfirmed").show();
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
    $("#dvRequested").hide();
    $("#dvCancelled").hide();
    $("#dvCompleted").hide();
    $("#dvConfirmed").hide();

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
