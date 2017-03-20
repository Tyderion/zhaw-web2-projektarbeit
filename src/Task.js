
function Task(name) {
    if (name === undefined || name === null || name.length === 0) {
        throw new Error('Task must have a title');
    }
    this.done = false;
    this.title = name;

}

