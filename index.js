
    function buscarCEP() {
        let cep = document.querySelector("#cep");
        let logradouro = document.querySelector("#logradouro");
        let bairro = document.querySelector("#bairro");
        let localidade = document.querySelector("#localidade");
        let estado = document.querySelector("#estado");
        let resposta = document.querySelector("#resposta");

        let validaCep = /[0-9]{8}/;
        if (cep.value.length == 8) {
            if (!validaCep.test(cep.value)) {
                alert("CEP invalido!");
                return;
            }
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
                .then(resposta => resposta.json())
                .then(json => {
                    logradouro.value = json.logradouro;
                    bairro.value = json.bairro;
                    localidade.value = json.localidade;
                    estado.value = json.estado;

                    resposta.innerHTML = `
            <div class="bg-red-700 border border-black rounded-lg">
                <div>Endereço: <span>${json.logradouro}</span></div>
                <div>Bairro: <span>${json.bairro}</span></div>
                <div>Cidade: <span>${json.localidade}</span></div>
                <div>Estado: <span>${json.estado}</span></div>
            </div>
                    `;
                })
        }
    }
