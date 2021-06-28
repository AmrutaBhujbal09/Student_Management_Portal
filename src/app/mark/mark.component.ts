import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { Observable } from 'rxjs';
import {AddSubjectService} from '../add-subject.service';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  sub:any;
  id:any;  
  constructor(private addsubjectService:AddSubjectService,private router:Router,private localstorage:LocalStorageService) 
  { 

  }

  ngOnInit(): void {

    //this.addsubjectService.getSubInfo(id:any)

    let id=Number(localStorage.getItem('student_id'));
    this.addsubjectService.getSubInfo(id).subscribe((res : any) =>{
  
        console.log('getStudentInfi() methods gets called')
    
          
    
          //to print all blogs on home page
          console.log(res);
          console.log("welcome to mark  page");
          this.sub = res;
          }, error => {
          alert("Unable to fetch records");
          
          })
    //console.log('getStudentInfi() methods gets called')
    //
    //if (id)
    //{
      //this.router.navigateByUrl("/mark");
    //}
  }
}
