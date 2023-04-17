// Custom FIle Upload JS Start Here

function fileValue(value) {
    var path = value.value;
    var extenstion = path.split('.').pop();
    if(extenstion == "xlsx"|| extenstion == "csv"){
        document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
        var filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
        document.getElementById("filename").innerHTML = filename;
    }else{
        alert("File not supported. ")
    }
}

// Custom Nested Checkbox Start Here

var checkboxes1 = document.querySelectorAll('input.subOption1'),
    checkall1 = document.getElementById('option1');
    
for(var i=0; i<checkboxes1.length; i++) {
  checkboxes1[i].onclick = function() {
    var checkedCount1 = document.querySelectorAll('input.subOption1:checked').length;

    checkall1.checked = checkedCount1 > 0;
    checkall1.indeterminate = checkedCount1 > 0 && checkedCount1 < checkboxes1.length;
  }
}

checkall1.onclick = function() {
  for(var i=0; i<checkboxes1.length; i++) {
    checkboxes1[i].checked = this.checked;
  }
}

var checkboxes2 = document.querySelectorAll('input.subOption2'),
    checkall2 = document.getElementById('option2');
    
for(var i=0; i<checkboxes2.length; i++) {
  checkboxes2[i].onclick = function() {
    var checkedCount2 = document.querySelectorAll('input.subOption2:checked').length;

    checkall2.checked = checkedCount2 > 0;
    checkall2.indeterminate = checkedCount2 > 0 && checkedCount2 < checkboxes2.length;
  }
}

checkall2.onclick = function() {
  for(var i=0; i<checkboxes2.length; i++) {
    checkboxes2[i].checked = this.checked;
  }
}

var checkboxes3 = document.querySelectorAll('input.subOption3'),
    checkall3 = document.getElementById('option3');
    
for(var i=0; i<checkboxes3.length; i++) {
  checkboxes3[i].onclick = function() {
    var checkedCount3 = document.querySelectorAll('input.subOption3:checked').length;

    checkall3.checked = checkedCount3 > 0;
    checkall3.indeterminate = checkedCount3 > 0 && checkedCount3 < checkboxes3.length;
  }
}

checkall3.onclick = function() {
  for(var i=0; i<checkboxes3.length; i++) {
    checkboxes3[i].checked = this.checked;
  }
}


