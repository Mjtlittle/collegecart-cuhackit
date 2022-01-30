import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import CreateUserDto from './dto/CreateUserDto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto) {
    return await this.usersRepository.save(user);
  }

  async findOne(params: FindOneOptions<User> = {}) {
    return await this.usersRepository.findOne(params);
  }
}
