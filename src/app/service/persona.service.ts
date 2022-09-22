import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from 'src/app/model/persona.models';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = environment + 'personas/';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
