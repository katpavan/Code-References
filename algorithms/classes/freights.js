// ## 5. 
// * Design a class to load freight
// * Freight contaings weight and timestamp
// * Add method to return total weight
// * Add method to return weight at given time.  
// * Implement logging system

class Freights {
    constructor() {
        this.allFreights = {};
    }

    loadFreight(name, weight, date) {
        this.allFreights[name] = {
            'weight': weight,
            'timeStamp': (date ? new Date(date) : new Date())
        }
    }

    totalWeight(time = undefined) {
        let result = 0, freightTimeStamp
        let checkTime = new Date(time);
        for (let i in this.allFreights) {
            freightTimeStamp = new Date(this.allFreights[i].timeStamp)
            if (checkTime - freightTimeStamp > 0 || time === undefined) {
                result += this.allFreights[i].weight;
            }
        }
        return result;
    }
}

let shipment = new Freights();
shipment.loadFreight('A.1.1.0', 1000, 'June 01 2019');
shipment.loadFreight('A.1.1.1', 2000, 'June 04 2019');
shipment.loadFreight('A.1.1.2', 2500, 'June 06 2019');
shipment.loadFreight('A.1.1.3', 3000);

console.log(shipment.allFreights);
shipment.totalWeight();
shipment.totalWeight('June 10 2019')