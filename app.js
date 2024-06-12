var users = [];
var userForm = document.getElementById('userForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var cardContainer = document.getElementById('cardContainer');
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var newUser = {
        name: nameInput.value,
        email: emailInput.value
    };
    users.push(newUser);
    nameInput.value = '';
    emailInput.value = '';
    displayUsers();
});
function displayUsers() {
    cardContainer.innerHTML = '';
    users.forEach(function (user) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = "<h2>".concat(user.name, "</h2><p>").concat(user.email, "</p>");
        cardContainer.appendChild(card);
    });
}
