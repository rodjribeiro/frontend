$(document).ready(() => {
	fetch('http://localhost:4000/api/users')
		.then(response => response.json())
		.then(json => json['data'])
		.then(json => {
			$('#display').html(JSON.stringify(json, null, 2));
			json.forEach(x => {
				$('#comissoes')
				.append(`<li><a href="#" id="${x.id}">${x.comissao}</a></li>`);
			});
			$('#comissoes li a').each((i, a) => {
				let $a = $(a);
				$a.click(() => {
					fetch(`http://localhost:4000/api/users/${$a.attr('id')}`)
						.then(response => response.json())
						.then(json => json['data'])
						.then(json => {
							$('#comissao').html("");
							Object.keys(json).forEach(key => {
								if (key == "id") return;
								$('#comissao').append(
									`<p><strong>${key}</strong>: ${json[key]}</p>`);
							});
							$('#comissao').append(
								'<strong><a id="delete" href="#">Deletar</a></strong>');
							$('#delete').click(() => {
								delete_user(json.id);
							});
						});
				});
			});
		});
});

function delete_user(id) {
	$.ajax({
		type: 'DELETE',
		url: `http://localhost:4000/api/users/${id}`,
		success: () => {
			window.alert("Sucesso");
			window.location.replace("listagem.html");
		},
		error: () => {
			window.alert("Algo deu errado");
		}
	});
}
