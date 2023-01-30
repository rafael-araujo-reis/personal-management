import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const components = [HeaderComponent, MenuComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class ComponentsModule {}
