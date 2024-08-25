import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BookingStatusesService } from './booking-statuses.service'
import { BookingStatus } from './entity/booking-status.entity'
import { FindManyBookingStatusArgs, FindUniqueBookingStatusArgs } from './dtos/find.args'
import { CreateBookingStatusInput } from './dtos/create-booking-status.input'
import { UpdateBookingStatusInput } from './dtos/update-booking-status.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => BookingStatus)
export class BookingStatusesResolver {
  constructor(private readonly bookingStatusesService: BookingStatusesService,
    private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @Mutation(() => BookingStatus)
  createBookingStatus(@Args('createBookingStatusInput') args: CreateBookingStatusInput, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.uid)
    return this.bookingStatusesService.create(args)
  }

  @Query(() => [BookingStatus], { name: 'bookingStatuses' })
  findAll(@Args() args: FindManyBookingStatusArgs) {
    return this.bookingStatusesService.findAll(args)
  }

  @Query(() => BookingStatus, { name: 'bookingStatus' })
  findOne(@Args() args: FindUniqueBookingStatusArgs) {
    return this.bookingStatusesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingStatus)
  async updateBookingStatus(@Args('updateBookingStatusInput') args: UpdateBookingStatusInput, @GetUser() user: GetUserType) {
    const bookingStatus = await this.prisma.bookingStatus.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, bookingStatus.uid)
    return this.bookingStatusesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingStatus)
  async removeBookingStatus(@Args() args: FindUniqueBookingStatusArgs, @GetUser() user: GetUserType) {
    const bookingStatus = await this.prisma.bookingStatus.findUnique(args)
    checkRowLevelPermission(user, bookingStatus.uid)
    return this.bookingStatusesService.remove(args)
  }
}
