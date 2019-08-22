import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  response: any = [];

  slideOpts = {
    initialSlide: 1,
    speed: 1000
  };

  constructor(private _http: HTTP) {}

  ionViewWillEnter() {
    this.getQuestions();
  }

  getQuestions() {
    this._http.get('http://localhost:8080/v1/qbank/question/Science', {}, {})
                .then(res => this.response = res.data)
                .catch(err => console.log(err));
                
  }
}
