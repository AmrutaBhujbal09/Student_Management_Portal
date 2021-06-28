import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubjectPayload } from './add-subject/subject-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSubjectService {

  constructor(private httpClient:HttpClient) 
  {


  }

  private baseUrl ="http://localhost:8000/api/";

  addStudent(subjectPayload:SubjectPayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'subject/AddSub',subjectPayload, { headers:headers });
  }  

 // getSubjectListById(id:number):Observable<any> {
   // let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    //return this.httpClient.get(this.baseUrl + 'subject/getStudentDetails/' + id , { headers:headers });

  //}

}
