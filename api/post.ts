import { Form } from '../actions/signup' 
import { get, post } from './index';

export class PostAPI {
  static async getAll() {
    try {
      const res = await get('posts')
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  static async get(id: number) {
    try {
      const res = await get(`post/${id}`)
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  static async create() {
  }
}
