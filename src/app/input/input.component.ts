import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  tipForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.tipForm = this.fb.group({
      cost: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      quality: ['',Validators.required],
      roundup: [false]
    });
  }

  

  onSubmit():void {
    if (this.tipForm.valid){
      const formValues = this.tipForm.value;
      const tip = formValues.cost * formValues.quality;
      const roundedTip = formValues.roundUp ? Math.ceil(tip) : Math.round(tip * 100) /100;
      const total = formValues.cost + roundedTip;

      this.router.navigate(['/output'], {
        state: {
          cost: formValues.cost,
          quality: formValues.quality,
          roundUp: formValues.roundUp,
          tip: roundedTip,
          total: total
        }
      });
    }
  }
}
