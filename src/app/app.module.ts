import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { AngularFireModule } from "angularfire2";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "angularfire2/database";

// export const firebaseConfig = {
//   apiKey: "xxxxxxxxxx",
//   authDomain: "your-domain-name.firebaseapp.com",
//   databaseURL: "https://your-domain-name.firebaseio.com",
//   storageBucket: "your-domain-name.appspot.com",
//   messagingSenderId: '<your-messaging-sender-id>'
// };

export const firebaseConfig = {
  apiKey: "AIzaSyDvZ6BCDToTZPVSC3N7hlwDmTTFekMH5YQ",
  authDomain: "goodangelliz-df534.firebaseapp.com",
  databaseURL: "https://goodangelliz-df534.firebaseio.com",
  projectId: "goodangelliz-df534",
  storageBucket: "goodangelliz-df534.appspot.com",
  messagingSenderId: "452779208379"
};

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
