var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName ='';
var place ='';


$(function () {debugger;
    $('#dvCenterUseOnly').hide();
    $('#dvOrderCompleted').hide();
    $('#dvOutDelivery').hide();
    $('#dvPaymentDue').hide();
    $('#dvOrderRequested').hide();
if (Appointmentid != undefined && Appointmentid != null) { LoadData(Appointmentid); }
    else {
        console.log('error')
        window.location.replace("404.html");
    }
    console.log(Appointmentid);
    console.log("ready!");
});



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
            console.log(data.results);
            console.log('success');
            if (data.status && data.results != null) {
                 statusName =data.results.statusname;
                 place=data.results.appointmentAddress ;

                 if (statusName == 'Requested') {
                    document.title = ' Pharmacy | Order Requested' ;
                    $('#dvCenterUseOnly').hide();
                    $('#dvOrderRequested').show();
                    $("#btnstatusname").attr('class', 'btn appoinmentbtn');
                } 
                else if (statusName == 'Closed'){
                    document.title = ' Pharmacy | Order Closed' ;
                    $('#dvCenterUseOnly').show();
                    $('#dvOrderCompleted').show();
                    $("#btnstatusname").attr('class', 'btn btn-orange');

                    }
                else if (statusName == 'Delivered'){
                    document.title = ' Pharmacy | Order Delivered' ;
                    $('#dvCenterUseOnly').show();
                    $('#dvOutDelivery').show();
                    $("#btnstatusname").attr('class', 'btn paymentduebtn');
                    }
                else if (statusName == 'Payment Pending'){
                    document.title = ' Pharmacy | Order Payment Due' ;
                    $('#dvCenterUseOnly').show();
                    $('#dvPaymentDue').show();
                    $("#btnstatusname").attr('class', 'btn paymentduebtn');
                    }
            
                $("#btnstatusname").text( data.results.statusname);
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtAppointmentDate").html('<i class="fa-solid fa-calendar-check"></i> ' + data.results.appointmentDate);
                $("#txtAppointmentTime").html('<i class="fa-solid fa-clock"></i> ' + data.results.appointmentTime);
                $("#btnAge").text(data.results.memberAge + ' Years');
                $("#btnCaseNo").text(data.results.caseNo);
                $("#txtAppointmentAddress").html(place);
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

$('#mapLogo').click(function () {
    window.open('https://www.google.com/maps/place/' + place);});



