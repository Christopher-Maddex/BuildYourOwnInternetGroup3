$(document).ready(function(){
	$('input#msg').on('keyup',function(){
		var charLimit = 40;
		var charCount = $(this).val().replace(/\s/g, '').length;
		var actualChars = charLimit - charCount;
		if(charCount > 40) {
			$("#charLength").css('background-color', 'red');
			$("#charLength").text(-actualChars + " too many characters");
		} else { 
			$("#charLength").css('background-color', '#ec971f');
			$("#charLength").text(actualChars + " characters remaining");
		}
	});
});
