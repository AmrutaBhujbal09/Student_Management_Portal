import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { StudentPayload } from './add-student/student-payload';
import { Observable } from 'rxjs';
import { Student } from './update-student/update-student.component';

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

  getStudentById(id:number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'user/StudentDetails/' + id , { headers:headers });

  }

  updateStudent(updatePayload: Student,id:Number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });
    return this.httpClient.put(this.baseUrl + 'user/UpdateStudent/' + id,updatePayload ,{headers:headers});
    
  }




}
