export class Practice {
    constructor(private x?: number, private y?: number) {
    }

    get X() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    set X(value) {
        if (value < 1) {
            throw new Error('value cannot be less than 0');
        }else {
            this.x = value;
        }
    }

    setY(value) {
        if (value < 1) {
            throw new Error('value cannot be less than 0');
        }else {
            this.y = value;
        }
    }

    draw() {
        console.log('Value of X: ' + this.x + ' Value of Y: ' + this.y);
    }
}
