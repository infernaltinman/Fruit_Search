const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	// filter fruit array by the string - save as a new array
	const results = fruit.filter(function(value){
		return value.toLowerCase().includes(str); // includes string anywhere in fruit name
	});
	return results;
}

function searchHandler(e) {
	// collect the whole string from the input
	let inputString = input.value.toLowerCase();
	// call search function on the string
	const results = search(inputString);
	// show the results
	showSuggestions(results, inputString);
}

function showSuggestions(results, inputVal) {
	// Remove all existing list items from dropdown
	clearDropdown();
	// append results array into dropdown
	for (let fruit of results){
		let newSuggestion = document.createElement('li');
		newSuggestion.innerText = fruit;
		suggestions.append(newSuggestion);
	}
	// if input is empty clear the dropdown
	if (inputVal === ""){
		clearDropdown();
	}
}

function useSuggestion(e) {
	// TODO
	// put event target into the input box
	let chosenSuggestion = e.target.innerText;
	input.value = chosenSuggestion;
	clearDropdown();
}

function clearDropdown() {
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.lastChild);
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);