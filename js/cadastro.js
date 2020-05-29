$(document).ready(() => {
	$('#form').submit(e => {
		e.preventDefault();
		var json = $('form').serializeArray().reduce((acc, x) => {
			acc[x.name] = x.value;
			return acc;
		}, {});
		json = JSON.stringify({user: json});
		$.ajax({
			type: "POST",
			url: "https://dutiful-accomplished-arthropods.gigalixirapp.com/api/users",
			data: json,
			success: () =>
				window.location.href = "index.html",
			error: () =>
				window.alert("Verifique as informações e tente novamente"),
			dataType: "json",
			contentType: "application/json"
		});
	});
});
