import {Report} from '../../shared/models/report.model';
export class TabbedReport extends Report {
    headers: string[];
    constructor(headers: string[], values: string[]) {
        super(values);
        this.headers = headers;
    }
    run() {
        console.log('From Parent Class:');
        this.headers.forEach(function(line) { console.log(line); });
        super.run();
    }
}
