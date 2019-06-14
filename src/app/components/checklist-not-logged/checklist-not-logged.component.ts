import { Component, OnInit } from '@angular/core';
import { Checklist } from 'src/app/models/checklist';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-checklist-not-logged',
  templateUrl: './checklist-not-logged.component.html',
  styleUrls: ['./checklist-not-logged.component.css']
})
export class ChecklistNotLoggedComponent implements OnInit {
  checklist: Checklist;

  newTask() {
    const newTask = new Task();
    newTask.result = false;
    this.checklist.tasks.push(newTask);
  }

  constructor() {
    this.checklist = new Checklist();
    const firstTask = new Task();
    firstTask.content = 'First Todo';
    firstTask.result = false;
    this.checklist.tasks.push(firstTask);
  }

  ngOnInit() {
  }

}
