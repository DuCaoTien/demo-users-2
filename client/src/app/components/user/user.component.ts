import { Component, OnInit, OnDestroy } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ModalCreateUserComponent } from '../modal-create-user/modal-create-user.component';

import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef;
  userList: any[];
  isLoadUser$: Subscription;

  constructor(
    private userService: UserService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getListUser();
    this.isLoadUser$ = this.userService.isLoadUserList$.subscribe(isLoadUserList => {
      if (!isLoadUserList) {
        return;
      }
      this.getListUser();
    });
  }

  ngOnDestroy(): void {
    this.isLoadUser$.unsubscribe();
  }

  createUser() {
    const initialState = {
      title: 'Create User Modal',
    };
    this.bsModalRef = this.modalService.show(ModalCreateUserComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  editUser(user) {
    const initialState = {
      title: 'Edit User Modal',
      userEdit : user
    };
    this.bsModalRef = this.modalService.show(ModalCreateUserComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  getListUser() {
    this.userService.getUsers().subscribe(res => {
      this.userList = res || null;
      console.log( this.userList );
    });
  }

}
