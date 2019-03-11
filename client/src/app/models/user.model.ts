import { required, compare, ascii, numeric } from '@rxweb/reactive-form-validators';

export class User {
  @ascii()
  email: string;

  @numeric()
  age: number;

  @required()
  name: string;


  @required()
  password: string;

  @compare({ fieldName: 'password' })
  confirmPassword?: string;

}
