function Wagon (capacity) {
    this.capacity = capacity;
    this.passengers = [];
}

Wagon.prototype = {
    constructor: Wagon,
    getAvailableSeatCount: function () {
        return (this.capacity - this.passengers.length);
    },
    join: function (traveler) {
        if (this.capacity > this.passengers.length) {
            this.passengers.push(traveler)
        }
        return;
    },
    shouldQuarantine: function () {
        let flag = false;
        this.passengers.forEach(element => {
            if (element.isHealthy === false) {
                flag = true;
            }
        });
        if (flag) {
            return true;
        } else {
            return false;
        }
    },
    totalFood: function () {
        let count = 0;
        this.passengers.forEach(element => {
            count += element.food;
          // console.log(element)
        });
        return count;
    }
}

function Traveler (name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

Traveler.prototype = {
    constructor: Wagon,
    hunt: function () {
        this.food += 2;
        return;
    },
    eat: function () {
        if (this.food > 0) {
            this.food--;
        } else {
            this.isHealthy = false
        }
        return;
    }
}
function Doctor (name) {
    Traveler.call(this, name);
    
}
Doctor.prototype = Object.create(Traveler.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.heal = function (traveler) {
    traveler.isHealthy = true;
}
function Hunter (name) {
    Traveler.call(this, name);
    this.food = 2;
}
Hunter.prototype = Object.create(Traveler.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype = {
    constructor: Hunter,
    hunt: function () {
        this.food += 5;
        return;
    },
    eat: function () {
        if (this.food >= 2) {
            this.food -= 2;

        } else {
            this.isHealthy = false
            this.food = 0;
        }
        return;
    },
    giveFood: function (traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            traveler.food += 0;
        } else {
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }
}

