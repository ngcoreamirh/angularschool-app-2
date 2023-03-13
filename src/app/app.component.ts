import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AddScoreComponent } from './add-score/add-score.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  // ******************** این سورس، ترکیبی از مفاهیم انگولار رو شامل میشه ********************
  // ***************** البته فعلا دستگرمی هست و روش های بهتری برای پیاده سازی این برنامه وجود داره *****************
  //==================================================================================================================

  // یکی از راه های دسترسی به متغیرهای کامپوننت فرزند داخل کامپوننت پدر استفاده از ویوچایلد هست
  @ViewChild(AddScoreComponent) scoreComponent: AddScoreComponent;

  constructor() {

  }

  ngAfterViewInit() {
    this.scoreComponent.courseList.push({ courceId: 106, courseTitle: "پروژه (افزوده شده با viewChild@)" })
  }


  openModal() {
    document.getElementById('modal-container').style.display = "block";
    document.getElementById('modal').style.display = "block";
  }


  closeModal() {
    document.getElementById('modal-container').style.display = "none";
    document.getElementById('modal').style.display = "none";
  }

  //===========================================================================
}