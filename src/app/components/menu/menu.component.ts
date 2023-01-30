import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuList: IMenu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data: any) => (this.menuList = data));
    console.log();
  }
}
