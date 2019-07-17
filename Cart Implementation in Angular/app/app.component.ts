/**
 * Created by namita on 7/28/16.
 */

import {Component, ViewChild} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {ItemListComponent} from './items/item-list.component';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        <div class="col-md-2"></div>
         <item-list (onAdd)="onAdd($event)"></item-list>
        <cart></cart>
        <div class="col-md-2"></div>

    `,
    directives: [CartComponent, ItemListComponent]
})

export class AppComponent {
    @ViewChild(CartComponent) private cartComponent:CartComponent;

    onAdd(item) {
        var itemCopy = Object.assign({}, item);
        this.cartComponent.addToCart(itemCopy);
    }
}