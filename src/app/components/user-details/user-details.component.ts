import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Fetch user
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 3000
      });
    } else {
      // Add id to user
      value.id = this.id;
      // Update client
      this.userService.updateUser(value);
      this.flashMessage.show('User details updated successfully', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/user/' + this.id]);
    }
  }
  onDeleteClick() {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(this.user);
      this.flashMessage.show('This User has been removed', {
        cssClass: 'alert-success', timeout: 3000
      });
      this.router.navigate(['/']);
    }
  }

}
