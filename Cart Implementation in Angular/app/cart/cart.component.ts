/**
 * Created by namita on 7/28/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'cart',
    template: `
    <div class="col-md-4 box mt14">
        <span class="fs4">Cart</span>
        <div>
            <ul class="items col-md-12">
                <li *ngFor="let item of items, let index=index">
                    <span class="text col-md-6">{{item.name}}</span>
                    <span class="text col-md-2">{{item.quantity}}</span>
                    <span class="glyphicon glyphicon-plus col-md-1 smallIcon" (click)="addToCart(item)"></span>
                    <span class="glyphicon glyphicon-minus col-md-1 smallIcon" (click)="editItem(item, index)"></span>
                    <span class="glyphicon glyphicon-trash col-md-1 smallIcon" (click)="removeItem(item, index)"></span>
                    <span class="col-md-1"></span>
                </li>
            </ul>
            <div *ngIf="!items.length">
                Your cart is empty!
            </div>
        </div>
    </div>
    `
})

export class CartComponent {
    private items = [];
    private obj:Object = <Object>{};

    addToCart(item) {
        var _this = this;
        if (_this.obj[item.id]) {
            _this.obj[item.id] += 1;
            _this.items.forEach(function (value, key) {
                if (value.id == item.id) {
                    value.quantity = _this.obj[item.id];
                }
            })
        } else {
            _this.obj[item.id] = 1;
            item.quantity = _this.obj[item.id];
            _this.items.push(item);
        }
    }

    editItem(item, index) {
        var _this = this;
        if (_this.obj[item.id] == 1) {
            delete _this.obj[item.id];
            _this.items.splice(index, 1);
        } else {
            _this.obj[item.id] = _this.obj[item.id] - 1;
            _this.items[index].quantity = _this.obj[item.id];
        }
    }

    removeItem(item, index) {
        var _this = this;
        delete _this.obj[item.id];
        _this.items.splice(index, 1);

    }
}