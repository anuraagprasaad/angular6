import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  @ViewChild('userForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 3000
      });
    } else {
      // Add new User
      this.userService.createUser(value);
      // Show message
      this.flashMessage.show('User added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/']);
    }
  }

}
