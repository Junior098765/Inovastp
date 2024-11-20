// Seleciona o botão de menu e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    navigation.classList.toggle('active');
});
