import { Component, OnInit } from '@angular/core';
import {MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  onLogin(username: string, password: string): void {
    console.log(username);
    if (username == 'mother' && password == 'thomas') {
      this.dialogRef.close();
      this.router.navigate(['dashboard']);
    }
    else {
      console.log("bad input");
    }
  }


  ngOnInit(): void {
  }

}
