import {
  publicDataFromUser,
  PublicUserDataDto,
} from '../../users/dto/UserData.dto';
import { Listing } from '../entities/listing.entity';

export default interface ListingDataDto {
  id: number;
  title: string;
  description?: string;
  starting_price: number;
  user: PublicUserDataDto;
}

export const dataFromListing = ({
  id,
  title,
  description,
  starting_price,
  user,
}: Listing): ListingDataDto => ({
  id,
  title,
  description,
  starting_price,
  user: publicDataFromUser(user),
});
