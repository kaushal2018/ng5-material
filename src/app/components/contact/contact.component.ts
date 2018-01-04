import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;

  constructor(private _fb: FormBuilder) { }

  title = 'contact';
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
  save(model: User, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
  ngOnInit() {
    this.myForm = this._fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        address: this._fb.group({
            street: ['', <any>Validators.required],
            postcode: ['']
        })
    });
  }

}
