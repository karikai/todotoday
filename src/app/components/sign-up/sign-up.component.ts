import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email;
  password;
  repass;

  passwordsMatch() {
    if (this.repass === this.password) {
      return true;
    } else {
      window.alert('Passwords must match');
      return false;
    }
  }

  signUp() {
    if (this.passwordsMatch()) {
      this.afa.auth.createUserWithEmailAndPassword(this.email, this.password).then(() => {
        const link = document.createElement('a');
        link.href = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch((err) => {
        window.alert(err);
      });
    }
  }

  constructor(private afa: AngularFireAuth) { }

  ngOnInit() {
  }

}
