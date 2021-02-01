import { User } from '../../users/user.entity';

export default class TestUtil {
  static giveAMeAValidUser(): User {
    const user = new User();
    user.id = '1';
    user.name = 'A valid Name';
    user.email = 'valid@email.com';
    user.password = '123456';

    return user;
  }
}
