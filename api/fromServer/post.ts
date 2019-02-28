import { Form } from '../../actions/signup' 
import { get, post } from './index';

export class PostAPIServer {
  static async getAll(cookie: string) {
    try {
      const res = await get('posts', cookie)
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  static async get(id: number, cookie: string) {
    try {
      const res = await get(`post/${id}`, cookie)
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  static async create() {
  }
}
