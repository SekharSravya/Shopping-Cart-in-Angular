/**
 * Created by namita on 7/29/16.
 */

import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from './item.service';
import {Item} from './item';

@Component({
    selector: 'item-list',
    template: `
    <div class="col-md-4">
        <span class="fs4">Items</span>
         <div>
            <ul class="items">
                <li *ngFor="let item of items">
                    <span class="text col-md-10">{{item.name}}</span>
                    <span class="glyphicon glyphicon-plus icon" style="vertical-align:middle" (click)="addToCart(item)"></span>
                    <span class="col-md-2"></span>
                </li>
            </ul>
        </div>
    </div>
    `,
    providers: <any>[ItemService]
})

export class ItemListComponent {
    constructor(private _itemService:ItemService) {
        //should be moved to ngOnInit lifecycle hook
        this.getItems();
    }

    @Output() onAdd = new EventEmitter<Item>();

    private items:Item[] = [];
    private errorMessage:any = '';

    getItems() {
        this._itemService.getData()
            .subscribe(
                items => this.items = items,
                error => this.errorMessage = <any>error);
    }

    addToCart(item) {
        this.onAdd.emit(item);
    }


}