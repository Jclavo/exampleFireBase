import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private resultRAW: any;
  private resultObservable: Observable<User[]>;

  constructor(private afs: AngularFirestore) { }

  getUsers(): Observable<User[]> {

    // this.afs.collection('/users').snapshotChanges()
    // .subscribe(snapshots => {
    //   //resolve(snapshots)
    //   console.log('DATARAW',snapshots);
    // })

    //console.log('DATARAW',this.afs.collection('/users').snapshotChanges());

    return this.afs.collection('/users').snapshotChanges()
    .pipe(map(res => {

      this.resultRAW = res;

      console.log('DATARAW',this.resultRAW);

      return this.resultObservable = this.resultRAW.map(userData => {
        return new User(
          userData.payload.doc.id,
          userData.payload.doc.data().name,
          userData.payload.doc.data().lastname,
          userData.payload.doc.data().age,
          );

      });
    }));

  }
}
