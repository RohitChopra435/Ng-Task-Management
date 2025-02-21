import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle:string='';
  enteredSummary:string='';
  enteredDate:string='';
  private tasksService = inject(TaskService)

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  onSubmit(){
    
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
      id: new Date().getTime().toString(),
      userId: this.userId
    });
    this.close.emit();
  }

}
