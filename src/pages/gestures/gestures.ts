import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  onElementClicked(){
    console.log('J\'ai été cliqué !')
  }
  onElementTapped(){
    console.log('J\'ai été tappé !')
  }

  onElementPressed(){
    console.log('J\'ai été pressé !')

  }
}
