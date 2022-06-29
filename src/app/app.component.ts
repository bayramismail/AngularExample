import { Component } from '@angular/core';
import { DenemeModel } from './models/deneme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularExample';
  firstGelen:DenemeModel={deger1:"",deger2:""}
  control(deneme:DenemeModel)
  {
    this.firstGelen=deneme;
    console.error(this.firstGelen)
  }
}
