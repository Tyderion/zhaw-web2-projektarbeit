function TaskList(title) {
    this.title = title;
    this.tasks = [];
    this.addTask = task => this.tasks.push(task);
    this.removeTask = task => this.tasks = this.tasks.filter(t => t.title !== task.title);
}