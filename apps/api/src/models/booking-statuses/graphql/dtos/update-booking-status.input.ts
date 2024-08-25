import { CreateBookingStatusInput } from './create-booking-status.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { BookingStatus } from '@prisma/client'

@InputType()
export class UpdateBookingStatusInput extends PartialType(CreateBookingStatusInput) {
  id: BookingStatus['id']
}
