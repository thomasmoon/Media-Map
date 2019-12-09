import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './services/sidenav.service';
import { CourseSidenavService } from './services/coursesidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

  title = 'Online Course in Tropical Forestry';

  pageParams: any;
  sidenavOpened: boolean;

  user:any;

  loginItems:any = [
    {
      id: 'google',
      icon: 'email',
      text: 'Google',
      route: '/'
    },/*
    {
      id: 'facebook',
      icon: 'thumb_up',
      text: 'Facebook',
      route: '/'
    },*/
    {
      id: 'twitter',
      icon: 'chat',
      text: 'Twitter',
      route: '/'
    },
    {
      id: 'github',
      icon: 'people',
      text: 'Github',
      route: '/'
    },
    {
      id: 'uni',
      icon: 'school',
      text: 'University of Helsinki',
      info: '(coming soon)',
      route: '/'
    },
  ];


  menuItems:any = [
    {
      icon: 'menu_book',
      text: 'Course Content',
      route: '/'
    },
    {
      icon: 'lock',
      text: 'Privacy',
      route: '/privacy'
    }
  ]

  adminMenuItems:any = [
    {
      icon: 'video_library',
      text: 'Videos',
      route: '/admin/videos'
    },
    {
      icon: 'chat',
      text: 'Comments',
      route: '/admin/comments'
    },
    {
      icon: 'person',
      text: 'Users',
      route: '/admin/users'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    public sidenavService: SidenavService,
    public courseSidenavService: CourseSidenavService
  ) {
      this.user = auth.user;
  }

  ngOnInit() {

    this.sidenavService.setSidenav(this.sidenav);

    this.pageParams = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.sidenavOpened = params['login'] || false;
    });
  }

  public courseSidenavToggle() {

    if (window.innerWidth <= 640) {
      this.courseSidenavService.toggle();
    }
  }

  public courseSidenavLink() {

    if (window.innerWidth > 640) {
      return ['/'];
    } else {
      return null;
    }
  }
}
