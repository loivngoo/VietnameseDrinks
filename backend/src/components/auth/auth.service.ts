import { HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PostgresErrorCode } from 'src/common/enums';

export class AuthService {
  constructor(private readonly _userService: UserService) {}

  public async signUp(el: any) {
    try {
      const createdUser = await this._userService.createUserAndProfile(el);

      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
