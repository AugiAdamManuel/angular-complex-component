import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgxsModule } from '@ngxs/store'
import { <%= name %>Component } from './<%= fileName %>.component'
import { <%= name %>State } from './<%= fileName %>.state'
import { <%= name %>Routes } from './<%= fileName %>.routes'
import { <%= name %>Service } from './<%= fileName %>.service'

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
