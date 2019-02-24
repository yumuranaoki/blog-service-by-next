import { Form } from '../actions/signup/form' 
import { post } from './index';

export class UserAPI {
  static async create(form: Form) {
    const res = await post('signup', form);
    return res;
  }
}
