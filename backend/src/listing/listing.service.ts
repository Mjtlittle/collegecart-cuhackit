import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import CreateListingDto from './dto/CreateListingDto';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private listingRepository: Repository<Listing>,
    private readonly usersService: UsersService,
  ) {}

  async findOne(params: FindOneOptions<Listing> = {}) {
    return await this.listingRepository.findOne(params);
  }

  async getAll(): Promise<Listing[]> {
    return await this.listingRepository.find({ where: { active: true } });
  }

  async create(listing: CreateListingDto, user_id: number): Promise<Listing> {
    return await this.listingRepository.save({
      ...listing,
      user: await this.usersService.getFromId(user_id),
    });
  }
}
