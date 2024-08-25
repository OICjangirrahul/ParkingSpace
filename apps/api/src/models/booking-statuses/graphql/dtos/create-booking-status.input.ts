import { InputType, PickType } from '@nestjs/graphql'
import { BookingStatus } from '../entity/booking-status.entity'

@InputType()
export class CreateBookingStatusInput extends PickType(BookingStatus,[],InputType) {}

