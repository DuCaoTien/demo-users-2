import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../models/user.model';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-modal-create-user',
  templateUrl: './modal-create-user.component.html',
  styleUrls: ['./modal-create-user.component.scss']
})
export class ModalCreateUserComponent implements OnInit {
  title: string;
  closeBtnName: string;
  isShowPassword = false;
  userFormGroup: FormGroup;
  user: User = {
    name: '',
    email: '',
    age: 0,
    password: '',
    confirmPassword: '',
  };
  userEdit: User;
  userSubmit: User = {
    name: '',
    email: '',
    age: 0,
    password: '',
  };

  constructor(
    public bsModalRef: BsModalRef,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.user = this.userEdit ? { ...this.user, ...this.userEdit } : this.user;
    this.userFormGroup = this.formBuilder.group(this.user);
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  inputUserName(value) {
    this.userSubmit.name = value || '';
  }

  inputMail(value) {
    this.userSubmit.email = value || '';
  }

  inputAge(value) {
    this.userSubmit.age = value || '';
  }

  inputPassword(value) {
    this.userSubmit.password = value || '';
  }

  submit() {
    this.bsModalRef.hide();
    this.userService.createUser(this.userSubmit).subscribe(res => {
      if (!res) {
        return this.toastrService.error('Create User Fail');
      }
      this.toastrService.success('Created User');
      this.userService.isLoadUserList$.next(true);
    }, err => {
      this.toastrService.error(err.error.message);
    });
  }

  showToastr() {

  }

}
