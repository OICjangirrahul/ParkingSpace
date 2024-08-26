// import { TotalPrice } from '@autospace/util/types'
import { CreateBookingInput } from 'src/models/bookings/graphql/dtos/create-booking.input'

export class CreateStripeDto {
  uid: string
  //EEEE
  totalPriceObj: 100
  bookingData: CreateBookingInput
}
