import { User } from '../../users/entities/user.entity';

export default interface CreateListingDto {
  title: string;
  description?: string;
  starting_price: number;
}
