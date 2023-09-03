import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ]
      ],
    });
  }

  register() {
    // Handle registration logic here
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
}
