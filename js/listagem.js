fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => JSON.stringify(json, null, 2))
	.then(json => document.getElementById('display').innerHTML = json);
