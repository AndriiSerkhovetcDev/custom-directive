import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {  HttpClientModule } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { TimeAgoDirective } from "./directives/time-ago/time-ago.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TimeAgoDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
}
