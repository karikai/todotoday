import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email;
  password;

  signIn() {
    this.afa.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
      const link = document.createElement('a');
      link.href = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((err) => {
      window.alert(err);
    });
  }

  constructor(private afa: AngularFireAuth) { }

  ngOnInit() {
  }

}
