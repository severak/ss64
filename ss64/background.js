// SS64.com extension

this.data={};

function fetchData() {
	//alert('SS64 requested data fetch.');
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			window.data.sugg = JSON.parse(xhr.responseText);
		}
	}
	xhr.open("GET", 'http://strajt9.sweb.cz/f/ss64.txt', true);

	if (!data.sugg) {
		xhr.send();
	}
}
	
	
//chrome.runtime.onStartup.addListener(fetchData);

chrome.omnibox.onInputStarted.addListener(function() {
		if (!window.data.sugg) {
			fetchData();
		}
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	var sugg=window.data.sugg;
	if (!sugg) { return; }
	if (text.indexOf(' ')<0) {
		return;
	}
	var prefix = text.substring(0, text.indexOf(' '));
	var suffix = text.substring(text.indexOf(' ')+1, text.length);
	if (sugg[prefix]) {
		var section = sugg[prefix];
		var res = [];
		for (key in section) {
			if (key.substring(0, suffix.length)==suffix) {
				res.push({content : prefix+' '+key, description : key})
			}
		}
		suggest(res);
	}
});

chrome.omnibox.onInputEntered.addListener(function(text) {
	if (!window.data.sugg) {
		return;
	}
	var sugg=window.data.sugg;
	if (text.indexOf(' ')<0) {
		return;
	}
	var prefix = text.substring(0, text.indexOf(' '));
	var suffix = text.substring(text.indexOf(' ')+1, text.length);
	if (sugg[prefix][suffix]) {
		chrome.tabs.create({url:sugg[prefix][suffix]});
	}
});

