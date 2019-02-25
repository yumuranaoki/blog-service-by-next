import { Form } from '../actions/signup' 
import { post } from './index';

export class UserAPI {
  static async create(form: Form) {
    let res;
    try {
      res = await post('signup', form);
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
    return res;
  }
}
