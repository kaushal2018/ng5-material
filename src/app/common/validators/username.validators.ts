import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

export class UserNameValidators {
    // usersObservable: Observable<any[]>;
    // constructor(private db: AngularFireDatabase) { 
    //     this.usersObservable = this.getUsers('/users/userName');
    // }
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') !== -1)
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'kaushal')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }

    // getUsers(listPath) {
    //     return this.db.list(listPath).valueChanges();
    // }
}
