import { NgModule } from '@angular/core'

import { <%= name %>Component } from './<%= fileName %>.component'
import { <%= name %>State } from './<%= fileName %>.state'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { <%= name %>Routes } from './<%= fileName %>.routes'
import { <%= name %>Service } from './<%= fileName %>.service'
import { NgxsModule } from '@ngxs/store'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(<%= name %>Routes),
    NgxsModule.forFeature([<%= name %>State])
  ],
  exports: [<%= name %>Component],
  declarations: [<%= name %>Component],
  providers: [<%= name %>State, <%= name %>Service]
})
export class <%= name %>Module {}
