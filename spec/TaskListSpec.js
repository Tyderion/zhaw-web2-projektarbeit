describe("Tasklist", () => {
  var tasklist;
  beforeEach(() => {
    taskList = new TaskList('title');
  });
  describe('properties', () => {
    it('should have a title', () => {
      expect(taskList.title).toEqual('title');
    });
    it('should have an array for tasks', () => {
      expect(Array.isArray(taskList.tasks)).toBeTruthy();
    });
    it('should have a function addTask', () => {
      expect(typeof taskList.addTask).toBe('function');
    });
    it('should have a function removeTask', () => {
      expect(typeof taskList.removeTask).toBe('function');
    });
  });
  describe('addTask', () => {
    it('should add the task to the list', () => {
      let task = new Task('taskName');
      taskList.addTask(task);
      expect(taskList.tasks.length).toEqual(1);
      expect(taskList.tasks[0].title).toEqual(task.title);
    });
  });
  describe('removeTask', () => {
    it('should remove the task to the list', () => {
      let task = new Task('taskName');
      taskList.addTask(task);
      taskList.removeTask(task);
      expect(taskList.tasks.length).toEqual(0);
    });
    it('should not remove any other task from the list', () => {
      let task = new Task('taskName');
      let task2 = new Task('taskName2');
      taskList.addTask(task);
      taskList.addTask(task2);
      taskList.removeTask(task2);
      expect(taskList.tasks.length).toEqual(1);
      expect(taskList.tasks[0].title).toEqual('taskName');
    });
  });
  describe('after creation', () => {
    it('should be empty', () => {
      expect(taskList.tasks.length).toBe(0);
    });
    it('should have the correct title', () => {
      expect(taskList.title).toBe('title');
    });
  });
});
