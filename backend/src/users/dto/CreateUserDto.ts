import { Provider } from '../../auth/types';

export default interface CreateUserDto {
  provider: Provider;
  providerId: string;
  username: string;
  name?: string;
}
