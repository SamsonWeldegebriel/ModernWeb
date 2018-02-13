import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: number;
  students: any;
  constructor(private route: ActivatedRoute, private ss : StudentsService) { 
    route.params.subscribe(params => this.id = params['id'])
    this.students = this.ss.getData();
  }

  ngOnInit() {
  }

}
