export const render = users => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    users.forEach(user => {
        const id = users.findIndex(el => el === user);
        tbody.insertAdjacentHTML(
            'beforeend',
            `
            <tr>
                <td>${id + 1}</td>
                <td>${user._name}</td>
                <td>${user._surname}</td>
                <td>${user._age}</td>
                <td>${user._hasChild ? 'Есть' : 'Нет'}</td>
                <td>${user._job}</td>
                <td>$${user._salary}</td>
                <td>${user._language}</td>
                <td><button id="${id}">Удалить</button></td>
            </tr>
        `
        );
    });
    localStorage.users = JSON.stringify(users);
};
