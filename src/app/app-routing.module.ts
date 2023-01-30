import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ConfigurationsComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'counts',
    component: ConfigurationsComponent,
    data: {
      title: 'Contas',
    },
  },
  {
    path: 'items',
    component: ConfigurationsComponent,
    data: {
      title: 'Lista de itens',
    },
  },
  {
    path: 'configs',
    component: ConfigurationsComponent,
    data: {
      title: 'Configurations',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
