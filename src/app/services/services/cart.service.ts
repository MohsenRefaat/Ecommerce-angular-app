import { Injectable, OnInit } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartItems: any[] = [];
  getCartItems(): any[] {
    throw new Error('Method not implemented.');
  }
  private cartKey = 'cart';
  private cart: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor(private storageService: StorageService
  ) {
    const savedCart = this.storageService.getItem(this.cartKey);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
    this.updateCartCount();
  }
  ngOnInit(): void {
    this.loadCartItems();

  } 
  loadCartItems() {
    this.cartItems = this.getCart();
  }


  getCart(): any[] {
    return this.cart;
  }

  addToCart(item: any, count: number): void {
    const existingItem = this.cart.find(cartItem => cartItem.product.id === item.id);
    if (existingItem) {
      existingItem.count += count;
    } else {
      this.cart.push({ product: item, count });
    }
    this.saveCart();
    this.updateCartCount();
  }

  removeFromCart(itemId: string): void {
    this.cart = this.cart.filter(cartItem => cartItem.product.id !== itemId);
    this.saveCart();
    this.updateCartCount();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
    this.updateCartCount();
  }

  private saveCart(): void {
    this.storageService.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  private updateCartCount(): void {
    const totalCount = this.cart.reduce((sum, cartItem) => sum + cartItem.count, 0);
    this.cartCountSubject.next(totalCount);
  }
}