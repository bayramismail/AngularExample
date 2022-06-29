import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DenemeModel } from '../models/deneme.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<DenemeModel>();
  constructor() {}
  inputForm = new FormGroup({
    deger1: new FormControl('', [Validators.required]),
    deger2: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  onSubmit() {
    if (this.inputForm.valid) {
      
      this.newItemEvent.emit(this.inputForm.value);
    }
  }
}
