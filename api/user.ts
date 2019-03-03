import { SignupForm } from '../actions/signup' 
import { UpdateForm } from '../components/profile/index' 
import { post, patch } from './index';

export class UserAPI {
  static async create(form: SignupForm) {
    try {
      const res = await post('signup', form);
      return res;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }

  static async patch(form: UpdateForm) {
    try {
      const res = await patch('user', form)
      return res
    } catch (error) {
      console.log(error)
      return new Error(error)
    }
  }
}
