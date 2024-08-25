import { Injectable } from '@nestjs/common'
import { FindManyBookingStatusArgs, FindUniqueBookingStatusArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateBookingStatusInput } from './dtos/create-booking-status.input'
import { UpdateBookingStatusInput } from './dtos/update-booking-status.input'

@Injectable()
export class BookingStatusesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBookingStatusInput: CreateBookingStatusInput) {
    return this.prisma.bookingStatus.create({
      data: createBookingStatusInput,
    })
  }

  findAll(args: FindManyBookingStatusArgs) {
    return this.prisma.bookingStatus.findMany(args)
  }

  findOne(args: FindUniqueBookingStatusArgs) {
    return this.prisma.bookingStatus.findUnique(args)
  }

  update(updateBookingStatusInput: UpdateBookingStatusInput) {
    const { id, ...data } = updateBookingStatusInput
    return this.prisma.bookingStatus.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueBookingStatusArgs) {
    return this.prisma.bookingStatus.delete(args)
  }
}
