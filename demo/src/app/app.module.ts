import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {VizabiSectionComponent} from './components/vizabi-section';
import {DemoHeaderComponent} from './components/demo-header';

import {TabsModule, CollapseModule, DropdownModule, ButtonsModule} from 'ng2-bootstrap';
import {VizabiModule} from 'ng2-vizabi';

import {AppComponent} from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    VizabiSectionComponent,
    AppComponent,
    DemoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VizabiModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    ButtonsModule.forRoot()
  ]
})
export class AppModule {
}
