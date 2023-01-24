import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(aboutUsForm: FormGroup){
    alert("Submited!")
  }

}
