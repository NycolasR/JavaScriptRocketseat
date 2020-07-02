/* EXPLICAÇÃO AJAX
    AJAX: requisição assíncrona realizada a um back-end;
    no Javascript, ao invés de termos que recarregar a página
    para trazer as novas informações do servidor, é possível usar o AJAX,
    que é uma forma de requisitar informações do servidor sem precisar
    atualizar a página.

    Requisição assíncrona: não acontece no mesmo fluxo do script, logo,
    o script não vai poder ficar esperando a requisição terminar para dar
    continuidade à sua execução
*/

var xhr = new XMLHttpRequest(); // classe que dá acesso às funcionalidades do AJAX

// buscando a URL com os dados desejados
// GET para buscar informações
xhr.open('GET', 'https://api.github.com/users/NycolasR')
xhr.send(null)

xhr.onreadystatechange = function() {
    // variável === 4 significa que a resposta retornou.
    // se o conteúdo retornou, está pronto para ser exibido.
    if(xhr.readyState === 4) { 
        console.log(JSON.parse(xhr.responseText))
    }
}