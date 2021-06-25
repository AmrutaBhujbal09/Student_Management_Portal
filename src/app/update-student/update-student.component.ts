import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {Router } from '@angular/router';
import {  AddStudentService} from '../add-student.service';
import { LocalStorageService} from 'ngx-webstorage';


import { StudentPayload} from './student-payload';
import { Observable } from 'rxjs';
import { StudentPayload } from '../add-student/student-payload';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updatestudentForm:FormGroup;
  updatePayload:StudentPayload;

  id:Number;

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,private addstudentService:AddStudentService) 
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

   
  }

}
