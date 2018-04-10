
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { BoutonPage } from '../pages/bouton/bouton';
import { GridPage } from '../pages/grid/grid';
import { GesturesPage } from './../pages/gestures/gestures';
import { TouchEventComponent } from '../components/touch-envent.component';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    BoutonPage,
    GridPage,
    GesturesPage,
    TouchEventComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    BoutonPage,
    GridPage,
    GesturesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
