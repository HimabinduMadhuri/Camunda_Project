import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private taskservice: TaskService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      assignee: ['', Validators.required],
      tenantID: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  

  onFormSubmit(){
    window.alert("working!");
  }

  createTask() {
    debugger;
    console.log(this.angForm.value);
    
    this.taskservice.addTask(this.angForm.value)
      .subscribe(res => {
        console.log(res);
        // alert('U have successfully registered with', res);     
      }, error => {
        console.log('Add business failure');
      });
  }

}
