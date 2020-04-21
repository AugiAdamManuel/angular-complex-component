import { NgModule } from '@angular/core'

import { HomeComponent } from './home.component'
import { HomeState } from './home.state'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomeRoutes } from './home.routes'
import { HomeService } from './home.service'
import { NgxsModule } from '@ngxs/store'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    NgxsModule.forFeature([HomeState])
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [HomeState, HomeService]
})
export class HomeModule {}
