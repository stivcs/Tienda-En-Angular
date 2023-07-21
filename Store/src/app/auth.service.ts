import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'https://koajstoreapi.onrender.com/api/login'; // URL de la API de login

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password }; // Datos de login
    return this.http.post(this.loginUrl, body);
  }
  

}

