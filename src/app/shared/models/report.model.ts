export class Report {
    data: string[];
    constructor(data: string[]) {
        this.data = data;
    }

    run() {
        console.log('From Inherited Child Class:');
        this.data.forEach(function(line) { console.log(line); });
    }
}
