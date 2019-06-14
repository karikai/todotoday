import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSigned: boolean;
  loaded = false;

  constructor(private afa: AngularFireAuth) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.isSigned = true;
      }
      this.loaded = true;
    })
  }

  ngOnInit() {
  }

}
