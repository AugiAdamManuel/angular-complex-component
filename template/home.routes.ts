import { Routes } from '@angular/router'
import { <%= name %>Component } from './<%= fileName %>.component'

export const <%= name %>Routes: Routes = [
  {
    path: '',
    component: <%= name %>Component
  }
]
