import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  id = "PID";

  constructor() { }s

  ngOnInit() {
  	this.id += Math.floor((Math.random() * 1000) + 100);
  }
}