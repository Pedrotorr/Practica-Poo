export class Task {
    constructor(text, category, completed) {
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    Render(parent) {
        const item = document.createElement('article');
        item.className = 'task-item';

        const text = document.createElement('span');
        text.textContent = this.text;
        text.classList.toggle('completed', this.completed);

        const category = document.createElement('span');
        category.textContent = this.category;

        const button = document.createElement('button');
        button.textContent = this.completed ? 'Completada' : 'Completar';
        button.disabled = this.completed;
        button.addEventListener('click', () => {
            this.completed = true;
            text.classList.add('completed');
            button.textContent = 'Completada';
            button.disabled = true;
        });

        item.append(text, category, button);
        parent.appendChild(item);
    }
}