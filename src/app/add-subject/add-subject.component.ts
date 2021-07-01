import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import {  AddSubjectService} from '../add-subject.service';
import { LocalStorageService} from 'ngx-webstorage';
import { SubjectPayload} from './subject-payload';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  addsubjectForm:FormGroup;
  subjectPayload:SubjectPayload;

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,private addsubjectService:AddSubjectService,private router:Router )
  { 

    this.addsubjectForm=this.formBuilder.group({
      
      //does the validation like required field validators,password mismatching validator, email validator.
      sname:['',[Validators.required]],
      mark:['',[Validators.required]],
      student_id:['',[Validators.required]]
    });//group


       //intialises subjectpayload fields

    this.subjectPayload={
      subject_name:'',
      marks:'',
      student_id:'',
    }

  }//constructor

  ngOnInit(): void {
  }

  //data binding after user click on submit button.All form data  bind with specific payload. 
  onSubmit() 
  {

    this.subjectPayload.subject_name =this.addsubjectForm.get('sname')?.value;
    this.subjectPayload.marks =this.addsubjectForm.get('mark')?.value;
    this.subjectPayload.student_id =this.addsubjectForm.get('student_id')?.value.toString();
   
    
    
    console.log(this.subjectPayload);



    //call api here  
    //call is given to addStudent() which is define inside SubjectService.
    this.addsubjectService.addStudent(this.subjectPayload).subscribe(data => 
      {
      console.log("hi");
      console.log(data);
      alert("Subject is added successfully !!");
      this.router.navigateByUrl("/home");

    } ,error => {
      alert('Unsuccessfull');
    
    })
  }//onSubmit()




}//class
