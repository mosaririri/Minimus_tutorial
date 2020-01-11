import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../service/weather/weather.service';
import { FbService } from '../service/fb/fb.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  temp:number;
  city = 'Rome';
  state: string;
  capitals = [];
  selectedCity;
  cardCity;
  showNote = false;
  followedCM = false;
  sub1;
  
  constructor(
    public http: HttpClient, 
    public weather: WeatherService,
    public fb: FbService,
  ) { }

  ngOnInit() {

    this.weather.getWeather(this.city).subscribe((payload: any) => {
      this.state = payload.weather[0].main;
      this.temp = Math.ceil(Number(payload.main.temp));
    });

    this.http.get('https://restcountries.eu/rest/v2/all').pipe(first()).subscribe((countries: Array<any>) => {
      countries.forEach((country: any) => {
       if (country.capital.length){
         this.capitals.push(country.capital);
       } 
      });
      this.capitals.sort();
    });

    this.sub1 = this.fb.getCities().subscribe((cities) => {
      Object.values(cities).forEach((city: any) => {
        if (city.name == 'Rome') {
          this.followedCM = true;
        }
      });
    });
  }

  selectCity(city: any) {
    if (this.capitals.includes(city)){
      this.cardCity = city;
      this.showNote = false;
    } else if (city.length > 0) {
      this.showNote = true;
    }
  }

  addCityOfTheMonth() {
    this.fb.addCity('Rome').subscribe(() => {
      this.followedCM = true;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
