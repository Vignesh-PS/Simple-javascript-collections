

$('#tipForm').submit(calculate);

function calculate(){
    var amount = $('#amount').val();
    var percentage = $('#tip').val();
    var tip = (amount/100)*percentage;
    var totalAmount = tip + Number(amount);

    $('#tip_amount').val(tip.toFixed(2));
        $('#total_amount').val(totalAmount.toFixed(2));
    return false; // return statement restricts reloading a page.
}   

