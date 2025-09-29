function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textareaRef = document.querySelector('textarea');
   const outputBestRestaurant = document.querySelector('#bestRestaurant p');
   const outputBestWorker = document.querySelector('#workers p');

   function onClick () {
      const input = textareaRef.value;
      const restaurantData = JSON.parse(input);

      const result = {};

      for (let el of restaurantData) {
         const [restaurantName, workersData] = el.split(' - ');
         if (!result.hasOwnProperty(restaurantName)) {
            result[restaurantName] = {
               bestSalary: 0,
               avgSalary: 0,
               workers: []
            }
         }
         const workers = workersData.split(', ');
         const newWorkerList = createWorkerList(workers);
         result[restaurantName].workers = 
            concatWorkersList(result[restaurantName].workers, newWorkerList);
         const salaryData = calculateRestaurantData(result[restaurantName].workers);
         result[restaurantName].bestSalary = salaryData.bestSalary;
         result[restaurantName].avgSalary = salaryData.avgSalary;
      }

      const bestRestaurant = findBestRestaurant(result);
      outputBestRestaurant.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

      let buff = '';

      bestRestaurant[1].workers
         .sort((a, b) => b.salary - a.salary)
         .forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);
      
      outputBestWorker.textContent = buff;
   }

   function findBestRestaurant(restaurantData) {
      return Object.entries(restaurantData)
         .sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0]; 
   }

   function calculateRestaurantData(workerList) {
      const result = {
         bestSalary: 0,
         avgSalary: 0
      }

      let sum = 0;

      for (let worker of workerList) {
         let salary = worker.salary;
         sum += salary;

         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }

      result.avgSalary = sum / workerList.length;
      return result;
   }

   function concatWorkersList(oldList, newList) {
      return oldList.concat(newList);
   }

   function createWorkerList(data) {
      const result = [];
      for (let el of data) {
         let [name, salary] = el.split(' ');
         salary = Number(salary);
         result.push({name, salary});
      }
      return result;
   }
}