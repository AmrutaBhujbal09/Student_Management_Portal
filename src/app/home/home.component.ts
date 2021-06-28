import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AddStudentService} from '../add-student.service';
import { StudentPayload } from '../add-student/student-payload';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

import {AddSubjectService} from '../add-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  add:any ;
  addstudent?:any;
  
  constructor(private addstudentService:AddStudentService,private addsubjectService:AddSubjectService,private router:Router,private localstorage:LocalStorageService) 
  {

  }

  ngOnInit(): void {

    this.addstudentService.getStudentList().subscribe((res : any) =>{

      //to print all blogs on home page
      console.log(res);
      console.log("welcome to home page");
      this.add = res;
      }, error => {
      alert("Unable to fetch records");
      
      })
   }

  
  deleteStudent(id:Number)
  {
    //let data=this.localstorage.retrieve('loginData');
    //console.log(data);
    var r=confirm("You are about to delte employee , are you sure?");
    if(r==true)
    {
      this.addstudentService.deleteStudent(id).subscribe((res : any) =>{

          
          console.log(res);
          console.log("");
          alert('Student Deleted Successfully  !!!')
          }, error => {
          alert("Unable to fetch records");
          
          })
    }   

    else{
      console.log("false")
    }
    
  }


  updateStudent(id:any) 
  {

  console.log('function gets called')
  localStorage.setItem('student_id',id)  
  if (id)
    {

    this.router.navigateByUrl("/update-student");
    // this.router.navigate(['/add-services'])
  
    }  
  }
}











