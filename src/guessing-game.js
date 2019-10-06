class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    //делим промежуток на половинку    
    guess() {
        this.center = Math.round((this.max + this.min)/2);
        return this.center;
    }
    //если больше заданного числа, то уменьшаем максимальное значение => уменьшаем промежуток   
    lower() {
        this.max = this.center;
    }
        
    greater() {
        this.min = this.center;
    }
}

module.exports = GuessingGame;
