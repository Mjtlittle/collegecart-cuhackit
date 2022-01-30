import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Listing } from './listing.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: true })
  active: boolean;

  @ManyToOne(() => Listing, (listing) => listing.offers)
  listing: Listing;

  @Column({ nullable: false })
  value: number;
}
