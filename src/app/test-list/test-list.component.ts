import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
tests:Test[]=[
  new Test(1,new Date(2020,12,12),"tora",100),
  new Test(2,new Date(2020,10,10),"history",100),
  new Test(3,new Date(2020,8,8),"math",80),
  new Test(4,new Date(2020,6,6),"english",90)
]
  constructor() { }

  ngOnInit(): void {
  }

}
