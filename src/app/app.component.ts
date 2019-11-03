import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paswnx';
  items: Observable<any[]>;

  private itemsCollection: AngularFirestoreCollection<Item>;
  itms: Observable<Item[]>;


  constructor(db: AngularFireDatabase, db2: AngularFirestore) {
    // this.items = db.list('items').valueChanges();

    this.itemsCollection = db2.collection<Item>('items');
    this.itms = this.itemsCollection.valueChanges();
    console.log(this.itms);

  }
}
