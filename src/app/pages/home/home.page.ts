import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseService: FirebaseService ) {}

  ngOnInit() {
    this.firebaseService.getUsers().subscribe( data => {
      //this.loading = false;
      //this.items = data;

      console.log("items: ", data);
    });

  }

}
