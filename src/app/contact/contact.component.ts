import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

contactForm:FormGroup = new FormGroup({
  userName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  Age:new FormControl(null,[Validators.pattern(/^[0-9]{2}$/),Validators.required,Validators.min(18)]),
  email : new FormControl(null,[Validators.required,Validators.email]),
  password : new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),

})

submit(form:FormGroup){
  console.log(form);
  
}
}


