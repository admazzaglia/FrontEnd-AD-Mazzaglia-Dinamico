import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { skill } from '../model/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  //URL = 'http://localhost:8080/skill/';
  URL = environment + 'skill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<skill[]> {
    return this.httpClient.get<skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<skill> {
    return this.httpClient.get<skill>(this.URL + 'detail/${id}');
  }

  public save(skill: skill): Observable<any> {
    return this.httpClient.post<any>(this.URL + `create`, skill);
  }

  public update(id: number, skill: skill):
  Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
