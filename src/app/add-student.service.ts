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

  private baseUrl ="http://localhost:8000/addapi/";

  addStudent(studentPayload:StudentPayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'user/AddStudent',studentPayload, { headers:headers });
  }  

  getStudentList():Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'user/GetStudentList', { headers:headers });
  }

  //delete user
  deleteStudent(id:Number)
  {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.baseUrl + 'user/DeleteStudent/' + id ,{headers : headers});
  }



}
