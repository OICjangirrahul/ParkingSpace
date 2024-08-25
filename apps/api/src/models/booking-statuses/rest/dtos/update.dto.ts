import { PartialType } from '@nestjs/swagger'
import { CreateBookingStatus } from './create.dto'
import { BookingStatus } from '@prisma/client'

export class UpdateBookingStatus extends PartialType(CreateBookingStatus) {
  id: BookingStatus['id']
}

