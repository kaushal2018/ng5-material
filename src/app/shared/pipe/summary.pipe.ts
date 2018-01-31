import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    actualLimit;
    transform(value: string, limit?: number) {
        if (!value) {
            return null;
        }
        this.actualLimit = (limit) ? limit : 50;
        return value.substr(0, this.actualLimit) + '...';
    }
}
