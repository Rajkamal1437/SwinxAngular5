import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-to-approve',
  templateUrl: './to-approve.component.html',
  styleUrls: ['./to-approve.component.scss']
})
export class ToApproveComponent implements OnInit {
  date = new FormControl(new Date());
   serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
