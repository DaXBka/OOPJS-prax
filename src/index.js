import { render } from './modules/render';
import { BackendDeveloper, FrontendDeveloper } from './modules/classes';

const form = document.querySelector('form');
const checkbox = document.getElementById('checkbox');
const select = document.getElementById('job');
const table = document.querySelector('table');

const users = localStorage.users ? JSON.parse(localStorage.users) : [];

const removeRow = id => {
    users.splice(id, 1);
    render(users);
};

form.addEventListener('submit', e => {
    e.preventDefault();

    if (select.value) {
        const info = {};
        const formData = new FormData(form);

        formData.forEach((val, key) => (info[key] = val));
        info['user-hasChild'] = checkbox.checked;

        let person;

        if (select.value === 'FE') {
            person = new FrontendDeveloper(
                info['user-name'],
                info['user-surname'],
                info['user-age'],
                info['user-hasChild'],
                info['user-salary'],
                info['user-language']
            );
        } else {
            person = new BackendDeveloper(
                info['user-name'],
                info['user-surname'],
                info['user-age'],
                info['user-hasChild'],
                info['user-salary'],
                info['user-language']
            );
        }
        users.push(person);

        render(users);
        form.reset();
    }
});

table.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let id = e.target.getAttribute('id');

        removeRow(id);
    }
});

render(users);
