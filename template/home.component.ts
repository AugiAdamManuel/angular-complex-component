import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Store } from "@ngxs/store";
import { BaseComponent } from "../shared/core/base.component";

@Component({
  selector: "ad-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"],
}) // Generated Component
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(public store: Store, private service: HomeService) {
    super();
  }

  public ngOnInit() {
    // TODO: Generated Component
  }
}
