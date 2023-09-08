import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenUrl = 'https://authorization.cerner.com/tenants/ff71527e-9dca-48a4-879a-37887a662385/protocols/oauth2/profiles/smart-v1/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('8df752cf-29b1-43bf-a541-334c9570ee29:rWJZXO93pZEFQxbnBj8jfPUNbNhSShVh')
    });

    const data = 'grant_type=client_credentials';

    return this.http.post(this.tokenUrl, data, { headers });
  }
}
