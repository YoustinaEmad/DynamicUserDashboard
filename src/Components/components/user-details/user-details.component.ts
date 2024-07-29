import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../models/models/user';
import { selectSelectedUser, selectUserById } from '../../../app/Selectors/user.selectors';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User | undefined |null>;
  

  constructor(private store: Store, private location: Location,private route: ActivatedRoute) {
    this.user$ = this.store.pipe(select(selectSelectedUser));
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const userId = +idParam;
      this.user$ = this.store.pipe(select(selectUserById(userId)));
    }
  }

  goBack() {
    this.location.back();
  }
}

