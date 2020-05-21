import { MessagesService } from './messages.service';
import { COURSES } from './mock-courses';
import { Course } from './course';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  

  constructor(private messageService: MessagesService) { }

  getCourses(): Observable<Course[]>{
    //TODO: send the message_ after_ fetching the heroes
    this.messageService.add('CourseService: fetched course')
    return of (COURSES);
  }
}
