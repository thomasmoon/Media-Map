import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class CourseSidenavService {

  private sidenav: MatSidenav;

  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
      return this.sidenav.open();
  }


  public close() {
      return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  public isOpen(): boolean {
    return this.sidenav.opened;
  }

  public isLoaded(): boolean {
    return typeof this.sidenav !== 'undefined';
  }
}
