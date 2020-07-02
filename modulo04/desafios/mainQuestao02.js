var inputElement = document.getElementsByName('user')[0]
var listElement = document.querySelector('ul#list')

function find() {
    if(naoTemEntrada()) {
        alert('Informe um nome de usuário!')
        return
    } else {
        recuperarRepos(inputElement.value)
    }
}

function naoTemEntrada() {
    return inputElement.value.length == 0
}

function gerarItem(name) {
    var repoElement = document.createTextNode(name)
    var listItem = document.createElement('li')
    listItem.appendChild(repoElement)
    listElement.appendChild(listItem)
}

function recuperarRepos(user) {
    listElement.innerHTML = '<li>Carregando...</li>'
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function(response) {
            listElement.innerHTML = ''
            var repos = response.data
            
            for(repo of repos) {
                gerarItem(repo.name)
            }
        })
        .catch(function(error) {
            listElement.innerHTML = '<li>Este Usuário não pôde ser encontrado</li>'
        })
}