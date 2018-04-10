import { Component } from "@angular/core";

@Component({
    selector: 'app-touch-event',
    template: `
    <div class="gestures" (click)="onElementClicked()" text-center>Cliques moi!</div>
<div class="gestures" (tap)="onElementTapped()" text-center>Tappes moi!</div>
<div class="gestures" (press)="onElementPressed()" text-center>Presses moi longtemps!</div>
    `

})
   /* comme j'appel le component par son app-touch-event dans bouton pas besoin de le mettre dans le entrycomponent */
export class TouchEventComponent{
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