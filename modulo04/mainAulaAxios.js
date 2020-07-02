// Biblioteca Axios para requisições assíncronas
// O Axios é um wrapper/encapsulador por volta do XMLHttpRequest

axios.get('https://api.github.com/users/NycolasR')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
    });