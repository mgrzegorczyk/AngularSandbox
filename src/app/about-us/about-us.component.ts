import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JokeDto } from './dtos/joke-dto';
import { AboutUsRequestsService } from './services/about-us-requests.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  randomJoke: JokeDto = <JokeDto>{};

  aboutUsForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });;
  
  constructor(private aboutUsRequestsService: AboutUsRequestsService) { }

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

  onGetJokeClick(){
    this.aboutUsRequestsService.getJoke()
      .subscribe(data => this.randomJoke = data);
  }

}
