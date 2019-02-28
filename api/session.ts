import { Form } from '../components/login' 
import { post, deleteReq } from './index';

export class SessionAPI {
  static async create(form: Form) {
    try {
      const res = await post('login', form);
      return res;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }

  static async destroy() {
    try {
      await deleteReq('logout')
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }
}
