let shoppingList = [];

function addItem() {
	let addItem = document.getElementById('item').value;
	shoppingList.push(addItem);
	function outputList() {
		let html = '';
		let output = document.getElementById('output');
		for(let i = 0; i < shoppingList.length; i++) {
			html += (i+1) + '. ' + shoppingList[i] + '<br>';
		}
		output.innerHTML = html;
	}
	outputList();
}