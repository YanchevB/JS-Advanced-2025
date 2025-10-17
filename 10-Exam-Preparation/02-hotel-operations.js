class Hotel {
  initialBudget;
  roomAvailability;
  supplyStock;
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {}
  }

  restockSupplies(supplies) {
    const messages = [];
    for (let supply of supplies) {
      let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(' ');
      supplyQuantity = Number(supplyQuantity);
      supplyTotalPrice = Number(supplyTotalPrice);

      if (supplyTotalPrice <= this.initialBudget) {
        if (!this.supplyStock[supplyName]) {
          this.supplyStock[supplyName] = supplyQuantity;
          this.initialBudget -= supplyTotalPrice;
        } else {
          this.supplyStock[supplyName] += supplyQuantity;
        }
        messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`)
      } else {
        messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`)
      }
    }
    return messages.join('\n');
  }

  addRoomType(roomType, neededSupplies, pricePerNight) {
    if (!this.roomAvailability[roomType]) {
      this.roomAvailability[roomType] = { neededSupplies, pricePerNight };

      return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`
    } else {
      return `The ${roomType} is already available in our hotel, try something different.`
    }
  }

  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length > 0) {
      return Object.entries(this.roomAvailability)
        .map(([room, price]) => `${room} - $ ${price.pricePerNight}`).join('\n')
    }
    return "Our rooms are not ready yet, please come back later...";
  }

  bookRoom(roomType) {
    if (!this.roomAvailability[roomType]) {
      return `There is no ${roomType} available, would you like to book another room?`;
    }

    const { neededSupplies, pricePerNight } = this.roomAvailability[roomType];

    for (let supply of neededSupplies) {
      let [supplyName, neededQuantity] = supply.split(' ');
      neededQuantity = Number(neededQuantity);

      if (!this.supplyStock[supplyName] || this.supplyStock[supplyName] < neededQuantity) {
        return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
      }
    }
    return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
  }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));