import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
students:string[]=["shani","chevi","shoshi","tovi","miri","chaya"]
  constructor() { }

  ngOnInit(): void {
  }

}
