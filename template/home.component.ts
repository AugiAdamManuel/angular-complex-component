import { Component, OnInit } from "@angular/core";
import { <%= name %>Service } from "./<%= fileName %>.service";
import { Store } from "@ngxs/store";
import { BaseComponent } from "../shared/core/base.component";

@Component({
  selector: "<%= selector %>",
  templateUrl: "<%= fileName %>.component.html",
  styleUrls: ["<%= fileName %>.component.scss"],
}) // Generated Component
export class <%= name %>Component extends BaseComponent implements OnInit {
  constructor(public store: Store, private service: <%= name %>Service) {
    super();
  }

  public ngOnInit() {
    // TODO: Generated Component
  }
}
