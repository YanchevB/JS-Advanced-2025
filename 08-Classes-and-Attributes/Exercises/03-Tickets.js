function generateTickets(data, criteria) {
  const result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status
    }

    static sort(arr, criteria) {
      return arr.sort((a, b) => {
        if (criteria === 'price') {
          return a[criteria] - b[criteria];
        } 

        return a[criteria].localeCompare(b[criteria]);
      })
    }
  }

  for (let entry of data) {
    let [destination, price, status] = entry.split('|');
    price = Number(price);

    const ticket = new Ticket(destination, price, status);
    result.push(ticket);
  }

  return Ticket.sort(result, criteria);
}

const result = generateTickets([
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'], 'destination');

console.log(result);
