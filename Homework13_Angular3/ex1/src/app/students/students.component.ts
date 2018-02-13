import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsList;
  constructor(private studentsService: StudentsService) { 
    this.studentsList = this.studentsService.getData();
    console.log(this.studentsList)
  }
  

  ngOnInit() {
  }

}
