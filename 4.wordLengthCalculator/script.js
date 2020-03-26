

$('#wordForm').submit(calculate);

function calculate(){
    var charactersSplitter = /[a-zA-Z]/g;
    var numbersSplitter = /[0-9]/g;
    var specialSplitter = /[.\-_\!\@\#\$\%\^\&\*\(\)\_\+\{\}\"\:\>\<\?\|\\\/\.\,\;\'\[\ \]]/g;

    var values = $('#words').val();
    var characters = values.match(charactersSplitter);
    characters = characters == null ? 0 : characters.length;
    var numbers = values.match(numbersSplitter);
    numbers = numbers == null ? 0 : numbers.length;
    var special = values.split(specialSplitter);
    special = special == null ? 0 : special.length - 1;
    

    $('.display').show();
    $('#display_alpha_characters').html(characters.toString());
    $('#display_num_characters').html(numbers.toString());
    $('#display_special_characters').html(special.toString());
    return false;
}

$('#calculator_clear').click(clean) ;

function clean(){
$('.display').hide();
}