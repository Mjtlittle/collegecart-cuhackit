import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './listing.controller';
import { Listing } from './entities/listing.entity';
import { ListingService } from './listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([Listing])],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
