function piglatin(words) {
	var list = words.split;
	var result = "";
	for (i=0; i<list.length; i++) {
		var info = consonant_finder(list[i]);
		var consonant = info[0];
		result + ((list[i].slice(0, info[1])) + (list[i].slice((info[1] + 1), list[i].length) + consonant + "ay"));
	return result;
	}

	function consonant_finder(word) {
		var vowels = ["a", "e", "i", "o", "u"];
		for (x = 0; x < word.length; x++) {
			if ((vowels.indexOf(word[x])) == -1) {
				if ((word[x] == "q") && (word[x + 1] == "u")) {
					var consonant = word[x] + word[x + 1];
				}
				else {
					consonant = word[x];
				}
				return [consonant, x];
			}
		}

	}
}