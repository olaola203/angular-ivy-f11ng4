import {
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import Calendar from 'tui-calendar';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('calendar') calendarContainer: ElementRef;

  ngAfterViewInit() {
    const cal = new Calendar(this.calendarContainer.nativeElement);
  }
}
