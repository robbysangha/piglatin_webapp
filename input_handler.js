$(document).ready(function() {
	$("button").click(function() {
		var word = $("#word").val();
   		$("#word").val(piglatin(word));
	});
   	function piglatin(word) {
	var info = consonant_finder(word);
	var consonant = info[0];
	return ((word.slice(0, info[1])) + (word.slice((info[1] + 1), word.length) + consonant + "ay"));
	

	function consonant_finder(word) {
		var vowels = ["a", "e", "i", "o", "u"];
		for (var x = 0; x < word.length; x++) {
			if ((vowels.indexOf(word[x])) == -1) {
				return [word[x], x];
			}
		}

	}
}
});
