import {
  Component,
  ContentChild,
  Directive,
  TemplateRef,
  VERSION
} from "@angular/core";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  time = 0;
  ngOnInit() {
    setInterval(() => (this.time = this.time + 1), 1000);
  }
}

@Directive({ selector: "newApp" })
export class Directive2 {}

@Component({
  selector: "my-app2",
  templateUrl: "./app1.component.html",
  styleUrls: ["./app.component.css"]
})
export class App1Component {
  @ContentChild(Directive2, { read: TemplateRef }) tem;
  @ContentChild("new", { read: TemplateRef }) tem1;
  @ContentChild("new1", { read: TemplateRef }) tem2;
  @ContentChild(HelloComponent, { read: TemplateRef }) tem3;
  i = 10;
  ngAfterViewInit() {
    setInterval(() => this.i++, 1000);
    console.log(this.tem);
    console.log(this.tem1);
  }
}
