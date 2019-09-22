import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/User.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private user: UserModel;
  //private id: String;

  constructor(private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router: Router) {

    this.user = new UserModel(null, null, null, 0);
  }

  ngOnInit() {
    this.user.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.user.id) {
      console.log('User', this.user.id);
      this.firebaseService.getUser(this.user.id).subscribe(dataUser => {
        this.user = dataUser;
      });
    }
    else {
      console.log('User Empty', this.user.id);

    }

  }

  saveUser(formUser: NgForm) {
    //this.user.id = formUser.value.id;
    this.user.name = formUser.value.name;
    this.user.lastname = formUser.value.lastname;
    this.user.age = formUser.value.age;

    if(this.user.id)
    {
      this.firebaseService.updateUser(this.user).then(() => {
        //this.router.navigateByUrl('/');
        this.router.navigate(['/home']);
        console.log('User updated');
        //this.showToast('Idea added');
      }, err => {
        //this.showToast('There was a problem adding your idea :(');
        console.log('There was a problem updating.....');
      });
    }
    else
    {
      this.firebaseService.saveUser(this.user).then(() => {
        //this.router.navigateByUrl('/');
        this.router.navigate(['/home']);
        console.log('User added');
        //this.showToast('Idea added');
      }, err => {
        //this.showToast('There was a problem adding your idea :(');
        console.log('There was a problem adding.....');
      });
    }

    
  }

}
