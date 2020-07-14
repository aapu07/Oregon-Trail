class traveler {
    constructor (name, food, isHeatlthy) {
      
        this.food = 1
        this.isHeatlthy = true
    }
    hunt () {
       
        this.food += 2
    }   
    eat () {
    

        if (this.food < 1) {
            return this.isHeatlthy = false
        }
        else {
            this.food -= 1
        }
    }   
}


class wagon {
    constructor (capacity, passengers) {
      
        this.capacity = capacity
        this.passengers = []
        
    }
    getAvailableSeatCount () {
     
        let AvailableSeatCount = this.capacity - this.passengers.length
        return AvailableSeatCount
    }   
    join (traveler) {
     
        if(this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
            
        }

    }   
    shouldQuarantine () {
       
        let healthyPassenger = this.passengers.some(traveler => traveler.isHeatlthy === false)
        return healthyPassenger
          
    }

    totalFood () {
       
        let meals = 0
        for(let index = 0; index < this.passengers.length; index += 1) {
            meals += this.passengers[index].food
        }
        return meals
    
    }
}
