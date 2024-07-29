import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../models/models/user';
import { loadUsers } from '../../../app/Actions/UserAction';
import { selectAllUsers } from '../../../app/Selectors/user.selectors';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  currentPage = 1;

  constructor(private store: Store, private router: Router) { 
    this.users$ = this.store.pipe(select(selectAllUsers));
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.store.dispatch(loadUsers({ page: this.currentPage }));
  }

  selectUser(id: number) {
    this.router.navigate(['/user', id]); 
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage() {
    this.currentPage++;
    this.loadUsers();
  }
}
