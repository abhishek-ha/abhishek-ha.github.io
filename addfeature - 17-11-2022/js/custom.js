function toggleMenu() {
   var element = document.getElementById("profile-sidebar");
   element.classList.toggle("open");
   var element2 = document.getElementById("responsiveSidebar")
   element2.classList.toggle('sidebar-open');
}


//  Proceed Button Funcnality 

var informationDetails = document.getElementById("information-details");
console.log(informationDetails);

function DisplayInformation(){
  console.log(informationDetails);
  informationDetails.style.display="block";
}

// Start Calling History, Transction Details , Payment Details Hide and Show


var callingHistory = document.getElementById("CallingHistory");
var transactionDetails = document.getElementById("TransactionDetails");
var paymentDetails = document.getElementById("PaymentDetails");


function CallingHistory() {     
  if (callingHistory.style.display === "none") {
    callingHistory.style.display = "block";
    transactionDetails.style.display = "none";
    paymentDetails.style.display = "none";

  } else {
    callingHistory.style.display = "none";
    transactionDetails.style.display = "none";
    paymentDetails.style.display = "none";
  }

}

function TransactionDetails(){
  if(transactionDetails.style.display==="none"){
    transactionDetails.style.display = "block";
    callingHistory.style.display = "none";
    paymentDetails.style.display = "none";
  }else{
    callingHistory.style.display = "none";
    transactionDetails.style.display = "none";
    paymentDetails.style.display = "none";
  }
}
function PaymentDetails(){
  if(paymentDetails.style.display==='none'){
    paymentDetails.style.display = "block";
    transactionDetails.style.display = "none";
    callingHistory.style.display = "none";
  }else{
    callingHistory.style.display = "none";
    transactionDetails.style.display = "none";
    paymentDetails.style.display = "none";
  }
}
// Ends Calling History, Transction Details , Payment Details Hide and Show



// Start Show and Hide Plan Member Section 

let PlanMemberSection = document.getElementById('showing-plan-member');
// console.log(PlanMemberSection);
function ShowingPlanMember(){
  if(PlanMemberSection.style.display==='none'){
    PlanMemberSection.style.display='block';
  }else{
    PlanMemberSection.style.display='none';
  }
}
// End  Show and Hide Plan Member Section 


// Starts Plan Member Edit card 
let EditPlanMemberCard1 = document.getElementById('EditPlanMenberCard1');
let EditPlanMemberCard2 = document.getElementById('EditPlanMenberCard2');
let EditPlanMemberCard3 = document.getElementById('EditPlanMenberCard3');

function EditPlanMember1(){
  EditPlanMemberCard1.style.display="block";
}

function EditPlanMember2(){
  EditPlanMemberCard2.style.display="block";
}
function EditPlanMember3(){
  EditPlanMemberCard3.style.display="block";
}


function HideEditPlanMember(){
  EditPlanMemberCard1.style.display="none";
  EditPlanMemberCard2.style.display="none";
  EditPlanMemberCard3.style.display="none";
}

var options = {
   series: [{
   name: 'TEAM A',
   type: 'column',
   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
 }, {
   name: 'TEAM B',
   type: 'area',
   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
 }, {
   name: 'TEAM C',
   type: 'line',
   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
 }],
   chart: {
   height: 350,
   type: 'line',
   stacked: false,
 },
 stroke: {
   width: [0, 2, 5],
   curve: 'smooth'
 },
 plotOptions: {
   bar: {
     columnWidth: '50%'
   }
 },
 
 fill: {
   opacity: [0.85, 0.25, 1],
   gradient: {
     inverseColors: false,
     shade: 'light',
     type: "vertical",
     opacityFrom: 0.85,
     opacityTo: 0.55,
     stops: [0, 100, 100, 100]
   }
 },
 labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
   '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
 ],
 markers: {
   size: 0
 },
 xaxis: {
   type: 'datetime'
 },
 yaxis: {
   title: {
     text: 'Points',
   },
   min: 0
 },
 tooltip: {
   shared: true,
   intersect: false,
   y: {
     formatter: function (y) {
       if (typeof y !== "undefined") {
         return y.toFixed(0) + " points";
       }
       return y;
 
     }
   }
 }
 };

 var chart = new ApexCharts(document.querySelector("#chart"), options);
 chart.render();




 




