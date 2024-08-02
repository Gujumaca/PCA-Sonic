import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
    title: "Salsa Romantica",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2aWOdoXQskCaxVFzCDxA8RXwfnuK1H7V8g&s",
    icon: "musical-notes-outline",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    description: "La mejor salsa de todos los tiempos"
  },
  {
    title: "Salsas Bravas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnE9AJlW5u0LjxmwXqOolvDoF1WqYRgt1i7Q&s",
    icon: "musical-notes-outline",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    description: "La mejor salsa Brava pa'l bailador!!!"
  },
  {
    title: "Vallenatos",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITpYg5QNMSWiUvsYBlwdL9gWWn9iFJ8d1Dg&s",
    icon: "musical-notes-outline",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    description: "Vallenatos para el recuerdo"
  },
  {
    title: "WhatsApp",
    icon: "logo-whatsapp",
    avatar: "https://cdn-icons-png.freepik.com/512/8102/8102780.png",
    description: "Contactanos"
  }
]

  constructor(private router: Router, private storage: Storage) { }

   ngOnInit() {
    console.log("Hola intro")
  }

  
  close() {
    //console.log("Estoy intentando cerrar la intro")
    this.storage.set("isIntroShowed", true)
    this.router.navigateByUrl("/menu/home")

  }
}
