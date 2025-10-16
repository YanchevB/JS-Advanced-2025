function solution() {
  class Employee {
    name;
    age;
    salary;
    task;
    constructor(name, age) {
      this.name = name;
      this.age = age; 
      this.task = [];
      this.salary = 0;
    }

    work() {
      console.log(this.task[0]);
      this.task.push(this.task.shift());
    }

    collectSalary() {
      const totalSalary = this.dividend ? this.salary + this.dividend : this.salary;
      console.log(`${this.name} received ${totalSalary} this month.`)
    };
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.task = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.task = [
        `${this.name} is working on a complicated task.`, 
        `${this.name} is taking time off work.`, 
        `${this.name} is supervising junior workers.`
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.task = [
        `${this.name} scheduled a meeting.`, 
        `${this.name} is preparing a quarterly report.`
      ]
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager
  }
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;

junior.collectSalary();

const senior = new classes.Senior('Alex', 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary(); 
const manager = new classes.Manager('Tom', 55); 
manager.salary = 15000; manager.collectSalary();
manager.dividend = 2500; manager.collectSalary();