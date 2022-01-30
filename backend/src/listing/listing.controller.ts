import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { Listing } from './entities/listing.entity';
import { Request, Response } from 'express';
import { ListingService } from './listing.service';
import ListingDataDto from './dto/ListingDataDto';
import { User } from '../users/entities/user.entity';
import CreateListingDto from './dto/CreateListingDto';
import { dataFromListing } from './dto/ListingDataDto';

@Controller('listings')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getAllListings(): Promise<ListingDataDto[]> {
    const listings = await this.listingService.getAll();
    return listings.map(dataFromListing);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createListing(
    @Req() req: Request,
    @Body() createListingDto: CreateListingDto,
  ): Promise<ListingDataDto> {
    const user = req.user as User;
    const listing = await this.listingService.create(createListingDto, user.id);

    return dataFromListing(listing);
  }

  // @Get(':id')
  // @UseGuards(JwtAuthGuard)
  // async getListing();
  // const listing = await this.listingService.findOne()
  // public get value() : string {
  //   return
  // }
  // (createListingDto, user.id);
}
