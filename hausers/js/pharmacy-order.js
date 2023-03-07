var href = new URL(window.location.href);
var Appointmentid = href.searchParams.get("AppointmentId");
var TotalCount;
var statusName = '';
var place = '';


$(function () {
    if (Appointmentid != undefined && Appointmentid != null) { LoadData(Appointmentid); }
    else {
        window.location.replace("404.html");
    }
});

function LoadData(Appointmentid) {
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
                    document.title = 'Pharmacy | Order Requested';
                    $("[id*='dvOrderRequested']").show();
                    $("[id*='btnstatusname']").html('ORDER REQUESTED');
                    $("[id*='btnstatusname']").attr('class', 'btn appoinmentbtn');
                }
                else if (statusName == 'Dispatched' || statusName == 'Package Picked') {
                    document.title = ' Pharmacy | Order Out For Delivery';
                    $("[id*='dvOutDelivery']").show();
                    $("[id*='dvCenterUseOnly']").show();
                    $("[id*='dvconfirmPaidBy']").show();
                    $("[id*='accordionFlushExample']").show();
                    $("[id*='btnstatusname']").html('OUT FOR DELIVERY');
                    $("[id*='btnstatusname']").attr('class', 'btn btn-outdelivery');
                }
                else if (statusName == 'Payment Pending') {
                    document.title = ' Pharmacy | Order Payment Due';
                    $("[id*='dvPaymentDue']").show();
                    $("[id*='dvCenterUseOnly']").show();
                    $("[id*='accordionFlushExample']").show();
                    $("[id*='btnstatusname']").html('PAYMENT DUE');
                    $("[id*='btnstatusname']").attr('class', 'btn paymentduebtn');
                }
                else if (statusName == 'Confirmed') {
                    document.title = ' Pharmacy | Confirm';
                    $("[id*='dvOrderConfirmed']").show();
                    $("[id*='dvCenterUseOnly']").show();
                    $("[id*='dvconfirmPaidBy']").show();
                    $("[id*='accordionFlushExample']").show();
                    $("[id*='btnstatusname']").html('ORDER CONFIRMED');
                    $("[id*='btnstatusname']").attr('class', 'btn btn-outdelivery');
                }
                else if (statusName == 'Closed' || statusName == 'Delivered') {
                    document.title = ' Pharmacy | Order Completed';
                    $("[id*='dvOrderCompleted']").show();
                    $("[id*='dvCenterUseOnly']").show();
                    $("[id*='dvconfirmPaidBy']").show();
                    $("[id*='dvEstimateDate']").hide();
                    $("[id*='accordionFlushExample']").show();
                    $("[id*='btnstatusname']").html('ORDER DELIVERED');
                    $("[id*='btnstatusname']").attr('class', 'btn btn-orange');
                }

                $("[id*='txtMemberName']").html('Hi, ' + data.results.memberName);
                $("[id*='btnGender']").text(data.results.gender);
                $("[id*='btnAge']").text(data.results.memberAge + ' Years');
                $("[id*='txtAppointmentDate']").html('<img src="images/calendar-black.png" class="boxicon"> ' + data.results.estDate);
                $("[id*='btnCaseNo']").text(data.results.caseNo);
                $("[id*='txtAppointmentAddress']").html(place + ' <a href="javascript:maplocation()"><img src="images/google-map.png" class="boxicon"> Location </a>');
                $("[id*='tagPrescription']").attr("href", data.results.reportSavePath);
                $("[id*='txtOrderAmount']").text(data.results.orderAmount);
                $("[id*='btnInvoice']").attr("href", data.results.invoiceLink);

                if(data.results.serviceName == "Pharmacy"){
                    TotalCount = data.results.coveredTests == null ?0 : data.results.coveredTests.length;
                    $.each(data.results.coveredTests, function (key, value) {
                        $("[id*='lstPharmacyOrder']").append('<li><i class="fa-solid fa-circle-check text-success"></i>' + ' '+ value.testName + '</a></li>');
                                                       
                    });                    
                }
                $("[id*='spnMedicineOrders']").html(TotalCount + '+ Medicines Orders');
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

function maplocation() {
    window.open('https://maps.google.com/?q=' + place);
}

