import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ListingService {
  constructor(
    @InjectRepository(Listing)
    private listingRepository: Repository<Listing>,
  ) {}

  create() {}
}
