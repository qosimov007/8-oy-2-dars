// app.ts
interface User {
    name: string;
    email: string;
}

const users: User[] = [];

const userForm = document.getElementById('userForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const cardContainer = document.getElementById('cardContainer') as HTMLDivElement;

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser: User = {
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
    users.forEach((user) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h2>${user.name}</h2><p>${user.email}</p>`;
        cardContainer.appendChild(card);
    });
}
