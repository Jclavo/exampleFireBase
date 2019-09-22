import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserModel } from 'src/app/models/User.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private users: Array<UserModel>;

  constructor(private firebaseService: FirebaseService ) {}

  ngOnInit() {
    this.firebaseService.getUsers().subscribe( dataUsers => {
      //this.loading = false;
      this.users = dataUsers;

      //console.log("items: ", data);
    });

  }

  deleteUser(id: string)
  {
    this.firebaseService.deleteUser(id).then(() => {
      //this.router.navigateByUrl('/');
      console.log('User deleted');
      //this.showToast('Idea added');
    }, err => {
      //this.showToast('There was a problem adding your idea :(');
      console.log('There was a problem deleting.....');
    });
  }

}
