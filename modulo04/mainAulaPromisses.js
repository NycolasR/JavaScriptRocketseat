/*EXPLICANDO PROMISES:
As promises (promessas) são códigos que ñ influenciam 
na linha do tempo do tempo do Javascript. São códigos/funções
que vão devolver o valor de resultado (seja ele sucesso ou erro)
só depois de um tempo. Não é preciso se preocupar quando esse valor será retornado
pois o script continuará executando normalmente.
*/

var minhaPromisse = function() { // o retorno dessa função será uma promise
    return new Promise(function(resolve, reject) {
        // resolve e reject são funções;
        // resolve é a função utilizada quando o resultado obtido foi de sucesso
        // reject é a função utilizada quando o resultado obtido não foi de sucesso

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/NycolasR')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromisse()
    .then(function(response) { // executado quando o resolve for chamado, logo, deu tudo certo
        console.log(response)
    }) 
    .catch(function(error) { // executado quando o reject for chamado, logo, não deu certo
        console.warn(error)
    });
