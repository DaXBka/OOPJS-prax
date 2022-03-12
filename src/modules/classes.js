class Person {
    constructor(name, surname, age, hasChild = false) {
        this._name = name;
        this._surname = surname;
        this._age = age;
        this._hasChild = hasChild;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        if (name.length < 3) {
            name = 'Unnamed';
        }
        this._name = name.trim();
    }

    get surname() {
        return this._surname;
    }
    set surname(surname) {
        if (surname.length < 3) {
            surname = 'Unnamed';
        }
        this._surname = surname.trim();
    }

    get age() {
        return this._age;
    }
    set age(age) {
        if (age < 0 || age > 100) {
            age = 25;
        }
        this._age = age;
    }

    get hasChild() {
        return this._hasChild;
    }
    set hasChild(hasChild) {
        if (typeof hasChild !== 'boolean') {
            hasChild = false;
        }
        this._hasChild = hasChild;
    }
}

export class FrontendDeveloper extends Person {
    constructor(name, surname, age, hasChild = false, salary, language) {
        super(name, surname, age, hasChild);
        this._salary = salary;
        this._language = language;
        this._job = 'Frontend Developer';
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if (salary < 0 || salary > 10000) {
            salary = 1000;
        }
        this._salary = salary;
    }

    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }

    get job() {
        return this._job;
    }
}

export class BackendDeveloper extends Person {
    constructor(name, surname, age, hasChild = false, salary, language) {
        super(name, surname, age, hasChild);
        this._salary = salary;
        this._language = language;
        this._job = 'Backend Developer';
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if (salary < 0 || salary > 10000) {
            salary = 1000;
        }
        this._salary = salary;
    }

    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }

    get job() {
        return this._job;
    }
}
