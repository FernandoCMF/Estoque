const $formPost = document.querySelector('form');

$formPost.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Dentro do form')

    const $inputPost = document.getElementById('inputPost')
    const $listaDeCaixa = document.getElementById('listaDeCaixas')

    const createElementLi = document.createElement('li')

    createElementLi.innerText = $inputPost.value;
    $listaDeCaixa.appendChild(createElementLi)

    $inputPost.value = ''

})