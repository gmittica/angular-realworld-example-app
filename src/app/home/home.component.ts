import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleListConfig, TagsService, UserService } from '../core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  isAuthenticated: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };
  tags = [];
  tagsLoaded = false;

  ngOnInit() {
    this.http.get("http://ad2020-env.eba-feeu4hxz.eu-west-1.elasticbeanstalk.com/").toPromise().then((res) => {
      this.tags = [].concat(res);
      this.tagsLoaded = true;
    }, () => {})
  }


}
