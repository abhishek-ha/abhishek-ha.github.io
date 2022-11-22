function toggleMenu() {
    var element = document.getElementById("sidebar-menu");
    element.classList.toggle("open");
}


// start date picker


$(document).ready(function(){

$('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    todayHighlight: true,
    toggleActive: true
});

});

// End date

