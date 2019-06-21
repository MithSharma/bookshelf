import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val["url"] === "/") {
        this.toggle = true;
      }
    });
  }
  toggle: boolean = true;
  title = 'BookShelf';

  ngOnInit() {
  }
  search() {
    this.router.navigate(['/search']);
    this.toggle = false;
  }

}
