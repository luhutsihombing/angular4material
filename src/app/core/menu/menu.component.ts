import { Component, OnInit,NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuService } from './menu.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  template: `
    <mat-nav-list appAccordion class="navigation">
      <mat-list-item appAccordionLink>
        <a appAccordionToggle class="relative" [routerLink]="['/dashboard']">
          <mat-icon class="mat-icon material-icons" role="img" aria-hidden="true">explore</mat-icon>
          <span>Home</span>
          <span fxFlex></span>
        </a>
       </mat-list-item>
      <mat-list-item appAccordionLink *ngFor = "let data of httpdata?.body.menus">
          <a appAccordionToggle class="relative" href="javascript:;">
            <mat-icon *ngIf="data.menuCode === 'USER'"
              class="mat-icon material-icons" role="img" aria-hidden="true">
              face
            </mat-icon>
            <mat-icon *ngIf="data.menuCode === 'PRODUCT'"
              class="mat-icon material-icons" role="img" aria-hidden="true">
              apps
            </mat-icon>
            <mat-icon *ngIf="data.menuCode === 'TRANSACTION'"
              class="mat-icon material-icons" role="img" aria-hidden="true">
              format_line_spacing
            </mat-icon>
            <span>{{data.title}}</span>
            <span fxFlex></span>
            <mat-icon class="menu-caret">arrow_drop_down</mat-icon>
          </a>
          <mat-nav-list class="sub-menu">
            <mat-list-item *ngFor="let childitem of data.subMenus" routerLinkActive="open">
              <a [routerLink]="[childitem.url ]" class="relative">{{ childitem.title }}</a>
            </mat-list-item>
          </mat-nav-list>
      </mat-list-item>      
    </mat-nav-list>`,
  providers: [MenuService]
})
export class MenuComponent implements OnInit{
  currentLang = 'en';
  httpdata;
  constructor(
    public menuService: MenuService,
    public translate: TranslateService) {
  }
  ngOnInit() 
  {
      this.loadData();
  }
  
  loadData() 
  {
   this.menuService.sendPost()
   .subscribe((posts) => {this.httpdata = posts;console.info(posts.body.menus);});    
 }
  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        {state: 'menu', name: 'MENU'},
        {state: 'timeline', name: 'MENU'}
      ]
    });
  }
}
