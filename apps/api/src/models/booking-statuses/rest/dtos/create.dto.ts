import { OmitType } from '@nestjs/swagger'
import { BookingStatusEntity } from '../entity/booking-status.entity'

export class CreateBookingStatus extends OmitType(BookingStatusEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
