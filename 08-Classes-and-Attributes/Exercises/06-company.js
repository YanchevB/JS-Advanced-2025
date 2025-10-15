class Company {
  departments;

  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {
        avg: 0,
        sumSalary: 0,
        employees: []
      };
    }

    this.departments[department].employees.push({ name, salary, position });

    this._updateDepartmentInfo(department, salary);

    return `New employee is hired. Name: ${name}. Position: ${position}`
  }

  bestDepartment() {
    const [departmentName, departmentInfo] = this._getBestDep();

    let buff = `Best Department is: ${departmentName}\n`
    buff += `Average salary: ${departmentInfo.avg.toFixed(2)}\n`;

    departmentInfo.employees.sort((a, b) => { 
      return b.salary - a.salary || a.name.localeCompare(b.name) 
    }).forEach(employee => buff += `${employee.name} ${employee.salary} ${employee.position}\n`);

    return buff.trim();
  }

  _getBestDep() {
    return Object.entries(this.departments)
      .sort(([keyA, valueA], [keyB, valueB]) => { valueA.avg - valueB.avg })[0];
  }

  _updateDepartmentInfo(department, salary) {
    const currentDep = this.departments[department];
    currentDep.sumSalary += salary;
    currentDep.avg = currentDep.sumSalary / currentDep.employees.length;
  }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());