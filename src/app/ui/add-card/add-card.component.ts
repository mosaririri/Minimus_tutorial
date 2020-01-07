import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui/ui.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  darkMode: boolean;
  sub1: Subscription;
  constructor(
    public ui: UiService,
  ) { }

  ngOnInit() {

    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

  }

  ngOnDestroy(){
    this.sub1.unsubscribe();
  }

}
