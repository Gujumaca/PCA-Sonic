import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if(
        credentials.email == "gustavo.marriaga@pca.edu.co" &&
        credentials.password == 1234
      ){
        accept("Ingreso correcto")
      }else{
        reject("Ingreso incorrecto")
      }
    })
  }
  registerUser(registerData: any){
    registerData.password = btoa(registerData.password)
    return this.storage.set("user", registerData);
  }
    
}
