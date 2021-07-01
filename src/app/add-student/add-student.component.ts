import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddStudentService } from '../add-student.service';
import { LocalStorageService } from 'ngx-webstorage';
import { StudentPayload } from './student-payload';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addstudentForm: FormGroup;
  studentPayload: StudentPayload;


  constructor(private formBuilder: FormBuilder, private localStorage: LocalStorageService, private addstudentService: AddStudentService, private router: Router) {


    this.addstudentForm = this.formBuilder.group({

      //does the validation like required field validators,password mismatching validator, email validator.
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^(?:[3-9]|[0-9][0-9]|50)$/)]],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      Gender_Choice: ['', [Validators.required]],
      //:['',[Validators.required]]

    });//group

    this.studentPayload = {
      first_name: '',
      last_name: '',
      age: '',
      date_of_birth: '',
      Gender_Choice: 'FEMALE',
    }

  }//constructor

  ngOnInit(): void {
    this.futurDateDisable()
  }

  maxDate: any;

  futurDateDisable() {
    var date: any = new Date();
    var todayDate: any = date.getDate();
    var month: any = date.getMonth() + 1;
    var year: any = date.getFullYear();

    if (todayDate < 10) {
      todayDate = '0' + todayDate;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.maxDate = year + "-" + month + "-" + todayDate;
    console.log(this.maxDate);

  }

   //data binding after user click on submit button.All form data  bind with specific payload. 
  onSubmit() {

    this.studentPayload.first_name = this.addstudentForm.get('fname')?.value;
    this.studentPayload.last_name = this.addstudentForm.get('lname')?.value;
    this.studentPayload.date_of_birth = this.addstudentForm.get('dob')?.value;
    this.studentPayload.age = this.addstudentForm.get('age')?.value.toString();
    this.studentPayload.Gender_Choice = this.addstudentForm.get('Gender_Choice')?.value;



    console.log(this.studentPayload);




    //call api here  
    //call is given to addStudent() which is define inside StudentService
    this.addstudentService.addStudent(this.studentPayload).subscribe(data => {
      console.log("hi");
      console.log(data);
      alert("Student is added successfully !!");
      this.router.navigateByUrl("/home");

    }, error => {
      alert('Unsuccessfull');

    })
  } //onSubmit()

}//class