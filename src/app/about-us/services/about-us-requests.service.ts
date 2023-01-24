import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeDto } from '../dtos/joke-dto';

@Injectable({
  providedIn: 'root'
})
export class AboutUsRequestsService {
  readonly jokeAPIurl = "https://official-joke-api.appspot.com/random_joke";
  
  constructor(private http: HttpClient) { }

  getJoke(): Observable<JokeDto> {
    return this.http.get<JokeDto>(this.jokeAPIurl);
  }
}
