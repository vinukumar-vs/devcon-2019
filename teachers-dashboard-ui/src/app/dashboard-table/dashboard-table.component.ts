import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent implements OnInit {

  showDetailedView = false;
  topic;
  type;
  flag = false;

  constructor() { }

  ngOnInit() {
  }

  showDetailedRow(type: any, topic: any) {
    if (this.topic && this.type && (this.topic === topic && this.type === type)) {
      this.flag = !this.flag;
    } else {
      this.flag = true;
    }
    console.log(this.flag);
    this.topic = topic;
    this.type = type;
    if (this.flag) {
      this.showDetailedView = true;
    } else {
      this.showDetailedView = false;
    }
  }

}
