$(document).ready(function () {
    $('#dateField').datepicker({
        format: "mm-dd-yyyy"
    })
})

function makeDirty(){
    document.getElementById("container").className += " is-dirty";
    document.getElementById("dateField").placeholder = 'MM-DD-YYYY'
}