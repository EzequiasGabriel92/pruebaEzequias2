import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
//import {Observable, Subject} de 'rxjs';
//import 'rxjs / add / operators / map';
//import 'rxjs / add / operators / catch';





export interface Item { name: string; }
export interface Item_id extends Item { id: string; }

export interface Contact { email: string, password:string, coments:string }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  

  private itemsCollection: AngularFirestoreCollection<Item>;
  //private itemsCollection1: AngularFirestoreCollection<Contact>;
  items: Observable<Item[]>;
 // contacts:Observable<Contact[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });

  }
  listaItem(){
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }
  eliminarItem(item){
    this.itemDoc=this.afs.doc<Item>('item/$(item.id)');
    this.itemDoc.delete();
  }
  editarItem(item){
    this.itemDoc=this.afs.doc<Item>('item/$(item.id)');
    this.itemDoc.update(item);
  }
  agregarContactos(contac: Contact) {
    //this.itemsCollection1.add(Contact);
  }
}

