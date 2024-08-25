import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateBookingStatus } from './dtos/create.dto'
import { BookingStatusQueryDto } from './dtos/query.dto'
import { UpdateBookingStatus } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { BookingStatusEntity } from './entity/bookingStatus.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'


@ApiTags('booking-statuses')
@Controller('booking-statuses')
export class BookingStatusesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BookingStatusEntity })
  @Post()
  create(@Body() createBookingStatusDto: CreateBookingStatus, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createBookingStatusDto.uid)
    return this.prisma.bookingStatus.create({ data: createBookingStatusDto })
  }

  @ApiOkResponse({ type: [BookingStatusEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: BookingStatusQueryDto) {
    return this.prisma.bookingStatus.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: BookingStatusEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.bookingStatus.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: BookingStatusEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookingStatusDto: UpdateBookingStatus,
    @GetUser() user: GetUserType,
  ) {
    const bookingStatus = await this.prisma.bookingStatus.findUnique({ where: { id } })
    checkRowLevelPermission(user, bookingStatus.uid)
    return this.prisma.bookingStatus.update({
      where: { id },
      data: updateBookingStatusDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const bookingStatus = await this.prisma.bookingStatus.findUnique({ where: { id } })
    checkRowLevelPermission(user, bookingStatus.uid)
    return this.prisma.bookingStatus.delete({ where: { id } })
  }
}
