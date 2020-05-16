var form = document.getElementById('form')
form.addEventListener('submit', function(e) {
	//auto submission of the form
	e.preventDefault()

	var name = document.getElementById('name').value
	var empresa = document.getElementById('empresa').value
	var gastos = document.getElementById('gastos').value
	//var ano = document.getElementById('ano').value
	//var price = document.getElementById('price').value
	//var email = document.getElementById('email').value
}
