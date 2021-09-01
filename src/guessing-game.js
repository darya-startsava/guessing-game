class GuessingGame {
    constructor() {
        let arr = [];
        let mid, min, max;
        this.mid = mid;
        this.arr = arr;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        for (let i = min; i <= max; i++) {
            this.arr.push(i);
        };
        return this.arr;
    }

    guess() {

        this.mid = Math.round((this.max - this.min) / 2) + this.min;
        return this.mid;

    }

    lower() {
        this.max = this.mid;
        return this.max;

    }

    greater() {
        this.min = this.mid;
        return this.min;
    }
}

module.exports = GuessingGame;
