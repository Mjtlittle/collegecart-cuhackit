import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingController } from './listing.controller';
import { Listing } from './entities/listing.entity';
import { ListingService } from './listing.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Listing])],
  controllers: [ListingController],
  providers: [ListingService],
})
export class ListingModule {}
