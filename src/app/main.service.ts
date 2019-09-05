import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private _http: HttpClient ) { }

  sendEmail(email,nombre,telefono,ciudad,mensaje){
    let url = "http://irhjal.org.mx/assets/irh_mail.php";
    let data = {
      email,
      nombre,
      telefono,
      ciudad,
      mensaje
    }

    return this._http.post(url, data);
  
  }

}
