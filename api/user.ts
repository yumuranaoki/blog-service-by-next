import { Form } from '../actions/signup' 
import { post } from './index';

export class UserAPI {
  static async create(form: Form) {
    try {
      const res = await post('signup', form);
      return res;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }
}
