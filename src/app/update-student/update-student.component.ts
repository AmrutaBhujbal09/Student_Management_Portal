import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import {AddStudentService} from '../add-student.service';
import { LocalStorageService } from 'ngx-webstorage';
import { StudentPayload} from '../add-student/student-payload';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updatestudentForm:FormGroup;
  updatePayload:Student;
  id:any;
  
  
  addStudent?: Observable<Array<StudentPayload>>;

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,private addstudentService:AddStudentService,private router:Router) 
  {

      this.updatePayload={

        first_name:'',
        last_name:'',
        age:'',
        date_of_birth:'',
        Gender_Choice:''
      }
  }

  ngOnInit(): void {
    //let localData = this.localStorage.retrieve('loginData');
    this.id = Number(localStorage.getItem('student_id'))


    this.getStudent()
    
    if(localStorage.getItem('student_id') == null){
      this.router.navigate(['/'])
    }

    console.log('this.id----------', this.id)
    
    this.updatestudentForm=this.formBuilder.group({
      fname:[this.updatePayload.first_name,[Validators.required]],
      lname:[this.updatePayload.last_name,[Validators.required]],
      //cell:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      age:['',[Validators.required,Validators.pattern(/^(?:[3-9]|[0-9][0-9]|50)$/)]],
      dob:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      Gender_Choice:['',[Validators.required]],
      
      
    });

   
  }


  getStudent(){

    this.addstudentService.getStudentById(this.id).subscribe((res : any) =>{
  
      //to print all blogs on home page
      console.log(res);
      this.updatePayload = res[0];
      this.updatestudentForm=this.formBuilder.group({
        fname:[this.updatePayload.first_name,[Validators.required]],
        lname:[this.updatePayload.last_name,[Validators.required]],
        //cell:[localData.mobile,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        age:['',[Validators.required,Validators.pattern(/^(?:[3-9]|[0-9][0-9]|50)$/)]],
        dob:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        Gender_Choice:['',[Validators.required]],
        
        
      
      });
     
      }, error => {
      alert("Unable to fetch records");
      
      })
  }


  //Data binding i.e all data have taken from form & put it in payload to sent these data to backend.
  onSubmit() {

    
    this.updatePayload.first_name =this.updatestudentForm.get('fname')?.value;
    this.updatePayload.last_name =this.updatestudentForm.get('lname')?.value;
    this.updatePayload.date_of_birth =this.updatestudentForm.get('dob')?.value;
    this.updatePayload.age=this.updatestudentForm.get('age')?.value.toString();
    this.updatePayload.Gender_Choice=this.updatestudentForm.get('Gender_Choice')?.value;
  
    

    this.addstudentService.updateStudent(this.updatePayload,this.id).subscribe(data => {
      alert("Employee updated successfully !!!")
      this.router.navigateByUrl("/home");
      console.log("welcome");
    } , error =>{
      alert('an error occurred');
    });
  }


}

export class Student
{
  first_name?:String;
  last_name?:String;
  date_of_birth?:String;
  age?:String;
 Gender_Choice?:String;

}

