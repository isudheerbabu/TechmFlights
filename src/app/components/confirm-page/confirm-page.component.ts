import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {
  confirmForm: FormGroup;
    submitted = false;
  constructor(public fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.confirmForm = this.fb.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              email: ['', [Validators.required, Validators.email]],
              mobile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.confirmForm.invalid) {
        return;
    } else {
    localStorage.setItem('details', JSON.stringify(this.confirmForm.value));
    this.router.navigate(['success']);
    }

}

onReset() {
    this.submitted = false;
    this.confirmForm.reset();
}


}
