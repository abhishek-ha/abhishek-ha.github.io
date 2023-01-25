var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var statusName ='';
var place ='';


$(function () {debugger;
    $('#dvAppointmentWith').hide();
    $('#dvFasting').hide();
    $('#dvConfirmed').hide();
     $('#dvCancelled').hide();
     $('#dvCompleted').hide();
     $('#dvRequested').hide();
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
            // console.log(data.results.statusname);
            console.log(data.results);
            console.log('success');
            if (data.status && data.results != null) {
                console.log(data.results.statusname);
                 statusName =data.results.statusname;
                 place=data.results.appointmentAddress ;

                 if (statusName == 'Requested') {
                    document.title = ' Home Care Requested' ;
                     $('#dvRequested').show();
                    $("#btnstatusname").attr('class', 'btn btn-grey statusbtn');
                    $("#imgHomeCare").attr('class', 'img-fluid  consultimg float-end');
                } 
                else if (statusName == 'completed'|| statusName == 'closed'){
                    document.title = ' Home Care completed' ;
                     $('#dvCompleted').show();
                    $("#btnstatusname").attr('class', 'btn btn-grey statusbtn');
                    $('#dvAppointmentWith').show();
                }
                else if (statusName == 'Cancelled'){
                    document.title = ' Home Care Cancelled' ;
                     $('#dvCancelled').show();
                    $("#btnstatusname").attr('class', 'btn btn-red statusbtn');
                    }
                else if (statusName == 'Confirmed'){
                    document.title = ' Home Care ' ;
                     $('#dvConfirmed').show();
                     $('#dvAppointmentWith').show();
                     $('#dvFasting').show();
                    $("#btnstatusname").attr('class', 'btn btn-orange statusbtn');
                    }
            
                $("#btnstatusname").text('Appoinment '+ data.results.statusname);
                $("#txtMemberName").html('Hi, ' + data.results.memberName);
                $("#btnGender").text(data.results.gender);
                $("#txtAppointmentDate").html('<img src="images/calendar-black.png" class="boxicon"> ' + data.results.appointmentDate);
                $("#txtAppointmentTime").html('<img src="images/clock.png" class="boxicon"> ' + data.results.appointmentTime);
                $("#btnAge").text(data.results.memberAge + ' Years');
                $("#btnCaseNo").text(data.results.caseNo);
                $("#appointmentFor").text(data.results.subServiceDetails);
                $("#doctname").text(data.results.doctorName);
                $("#designation").text(data.results.doctorName);
                $("#btnFasting").text(data.results.isFasting);
                $("#btnCaseNoConfirmed").text(data.results.caseNo);
                $("#btnPaymentSettlementMode").text(data.results.paymentMode);
                $("#txtProviderName").text(data.results.providerName);
                $("#txtProviderEmail").html('<i class="fa-regular fa-envelope" ></i> ' + data.results.providerEmail);
                $("#txtProviderMobile").html('<img src="images/call-black-icon.png" class="boxicon"> ' + data.results.providerMobile);
                $("#txtPaymentMode").html('<img src="images/wallet.png" class="boxicon">'+ data.results.paymentMode);
                $("#custAddress").html(place +' <a href="javascript:maplocation(' + data.results.providerLatitude + ',' + data.results.providerLongitude + ')"><img src="images/google-map.png" class="boxicon"> Direction </a>');
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

// $('#mapLogo').click(function () {
//     window.open('https://www.google.com/maps/place/' + place);});

    function maplocation(lat, long) {
        window.open('https://maps.google.com/?q=' + lat + ',' + lat);
    }    



