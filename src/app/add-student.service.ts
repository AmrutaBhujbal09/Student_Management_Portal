import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentPayload } from './add-student/student-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private httpClient:HttpClient) 
  {

  }

  private baseUrl ="http://localhost:8000";

  addStudent(studentPayload:StudentPayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'addapi/AddStudent',studentPayload, { headers:headers });
  }  


}
