import { Form } from '../actions/signup' 
import { get, post } from './index';

export class PostAPI {
  static async get() {
    try {
      const res = await get('posts')
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  static async create() {
  }
}
