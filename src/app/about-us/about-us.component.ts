import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  aboutUsForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });;
  
  constructor() { }

  ngOnDestroy(): void {
    alert("Ciao!");
  }

  ngOnInit(): void {
    this.setDefaultName("Bartek");
  }

  onSubmit(aboutUsForm: FormGroup){
    alert("Submited!")
  }

  private setDefaultName(name: string){
    this.aboutUsForm.controls['name'].setValue(name);
  }

}
