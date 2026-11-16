export class Member {
    constructor(name, position, department, available) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.available = available;
    }

    Render(parent) {
        const card = document.createElement('article');
        card.className = 'member-card';

        const name = document.createElement('h2');
        name.textContent = this.name;

        const position = document.createElement('p');
        position.textContent = `Puesto: ${this.position}`;

        const department = document.createElement('p');
        department.textContent = `Departamento: ${this.department}`;

        const availability = document.createElement('p');
        availability.textContent = `Disponibilidad: ${this.available ? 'Disponible' : 'No disponible'}`;

        card.append(name, position, department, availability);
        parent.appendChild(card);
    }
}