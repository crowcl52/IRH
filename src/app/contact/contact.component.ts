import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = "";
  nombre = "";
  telefono = "";
  ciudad = "Guadalajara";
  mensaje = "";

  constructor(private service: MainService) { }

  ngOnInit() {
  }

  sendEmail() {
    this.service.sendEmail(this.email, this.nombre, this.telefono, this.ciudad, this.mensaje).subscribe(data =>{
      console.log(data);
    })
    this.email = "";
    this.nombre = "";
    this.mensaje = "";
  }

}
