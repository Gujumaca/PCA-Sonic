import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages ={
    name: [
      {type: "required", message: "El nombre es obligatorio"}
    ],
    last_name: [
      {type: "required", message: "El apellido es obligatorio"}
    ],
    email: [
      {type: "required", message: "El email es obligatorio"},
      {type: "pattern", message: "Dominio invalido"}
    ],
    password: [
      {type: "required", message: "La contraseña es obligatorio"}
    ]
  }
  errorMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage,
    private autheService: AuthenticateService
  ) { 
    this.registerForm= this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[pca].+[edu].+[co]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      name: new FormControl(
        "",
       Validators.compose([
         Validators.required
        ])
     ),
     last_name: new FormControl(
      "",
        Validators.compose([
          Validators.required
        ])
     )
    })
  }

  ngOnInit() {}

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }

  register(registerData: any){
    console.log(registerData);
    this.storage.set("user", registerData);
    this.autheService.registerUser(registerData).then(res => {
      this.navCtrl.navigateBack("/login"); 
    });
  }

}
