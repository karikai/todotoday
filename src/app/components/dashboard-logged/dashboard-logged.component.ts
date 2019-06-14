import { Component, OnInit } from '@angular/core';
import { Checklist } from 'src/app/models/checklist';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-dashboard-logged',
  templateUrl: './dashboard-logged.component.html',
  styleUrls: ['./dashboard-logged.component.css']
})
export class DashboardLoggedComponent implements OnInit {
  checklist: Checklist;

  newTask() {
    const newTask = new Task();
    newTask.result = false;
    this.checklist.tasks.push(newTask);
  }

  constructor() {
    this.checklist = new Checklist();
    const firstTask = new Task();
    firstTask.content = 'First Todo (press enter to make a new task)';
    firstTask.result = false;
    this.checklist.tasks.push(firstTask);
  }

  ngOnInit() {
  }

}
