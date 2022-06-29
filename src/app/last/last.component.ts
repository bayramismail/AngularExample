import { DenemeModel } from './../models/deneme.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css'],
})
export class LastComponent implements OnInit {
  
  @Input() getInput1:DenemeModel={
    deger1:"",
    deger2:""
  }
  constructor() {}

  ngOnInit(): void {}
}
