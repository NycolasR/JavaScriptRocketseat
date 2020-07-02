function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if(idade >= 18) {
            setTimeout(resolve, 2000)
        } else {
            setTimeout(reject, 2000)
        }
    })
}

checaIdade(17)
    .then(function() {
        console.log('Maior de idade')
    })
    .catch(function() {
        console.log('Menor de idade')
    })