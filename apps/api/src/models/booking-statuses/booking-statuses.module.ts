import { Module } from '@nestjs/common'
import { BookingStatusesService } from './graphql/booking-statuses.service'
import { BookingStatusesResolver } from './graphql/booking-statuses.resolver'
import { BookingStatusesController } from './rest/booking-statuses.controller'

@Module({
  providers: [BookingStatusesResolver, BookingStatusesService],
  exports: [BookingStatusesService],
  controllers: [BookingStatusesController],
})
export class BookingStatusesModule {}
