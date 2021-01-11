import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent, App1Component, Directive2 } from "./app.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, App1Component, Directive2],
  bootstrap: [AppComponent]
})
export class AppModule {}
