import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities';
import { UserRepository } from 'src/repositories/user.repository';
import { ProfileService } from '../profile/profile.service';
import { CartService } from '../cart/cart.service';

@Injectable()
export class UserService {
  constructor(
    private readonly _repo: UserRepository,
    private readonly _profileService: ProfileService,
    private readonly _cartService: CartService,
  ) {}

  private async createCart(user_id: string) {
    return this._cartService.create({
      user_id,
      total_price: 0,
    });
  }

  async retrieve(options?: any, where?: any) {
    return this._repo.getListUser(options, where);
  }

  async createUserAndProfile(el: any) {
    const user = await this.createUser(el);

    await this.createCart(user['id']);

    await this.createProfile({ ...el, user_id: user['id'] });
    return user;
  }

  async createProfile(el: any) {
    return this._profileService.create(el);
  }

  private async createUser(el: any) {
    const user = await this._repo.findByEmailOrPhone(el);

    if (user?.email === el['email']) {
      throw new HttpException(
        'Email is already existed. Try again.',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (user?.phone === el['phone']) {
      throw new HttpException(
        'Phone is already existed. Try again.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this._repo.createUser(el) as unknown as UserEntity;
  }

  async update(el: any) {
    if (el['password']) {
      return this._repo.resetPassword(el['id'], el['password']);
    }
    return this._repo.updateUser(el);
  }

  async get(id: string) {
    return this._repo.getUser(id);
  }
}
