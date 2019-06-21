import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UtilityService } from '../services/utility.service';
@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  constructor(private httpService:HttpService,private utility:UtilityService) { }
  categories = [];
  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.httpService.getData()
    .subscribe((data) => {
      this.categories = this.utility.formatData(data);
    });
  }
  changeStatus(book, str) {
    book["ReadState"] = str;
    let self = this;
    this.httpService.updateReadStatus(JSON.stringify(book))
    .subscribe((data) => {
      self.getdata();
    });
  }
}
