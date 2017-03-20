describe("Task", ()=> {
  var task;
  beforeEach(() => {
    task = new Task('title');
  })
  describe('properties', () => {
    it('should have a title', () => {
      expect(task.title).toEqual('title');
    });

    it('should have a property done', () => {
      expect(task.done).toEqual(false);
    });
  })
  describe('after creation', () => {
    it('should not be done', () => {
      expect(task.done).toBe(false);
    });
    it('should throw an error if it has no name', () => {
      try {
        let t = new Task();
        fail();
      } catch(err) {
        expect(err.message).toEqual('Task must have a name');
      }
    })
  });

  describe('setting done', () => {
    it('should be done afterwards', () => {
      task.done = true;
      expect(task.done).toBeTruthy();
    })
  })
});
