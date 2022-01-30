import { User } from '../entities/user.entity';

export interface PublicUserDataDto {
  id: number;
  name: string;
}

export interface PrivateUserDataDto extends PublicUserDataDto {
  email: string;
}

export const privateDataFromUser = ({
  email,
  name,
  id,
}: User): PrivateUserDataDto => ({ email, name, id });

export const publicDataFromUser = ({ name, id }: User): PublicUserDataDto => ({
  name,
  id,
});
