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
import { Offer } from './offer.entity';

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: true })
  active: boolean;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, default: '' })
  description?: string;

  @Column({ nullable: false })
  starting_price: number;

  @ManyToOne(() => User, (user) => user.listings, { eager: true })
  user: User;

  @OneToMany(() => Offer, (offer) => offer.listing)
  offers: Offer[];
}
