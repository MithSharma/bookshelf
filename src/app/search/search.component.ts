import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { UtilityService } from '../services/utility.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService,private utility:UtilityService) { }
  books:any;
  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/']);
  }
  findbyGenre(event) {
    let self = this;
    this.httpService.getSearchedItems(event.target.value).subscribe(result=>{
      self.books =  result;
    });
  }

  changeStatus(book, str) {
    book = this.utility.makeBookObj(book);
    book["ReadState"] = str;
    let self = this;
    this.httpService.updateReadStatus(JSON.stringify(book))
    .subscribe((data) => {
      console.log(data);
    });
  }
}
