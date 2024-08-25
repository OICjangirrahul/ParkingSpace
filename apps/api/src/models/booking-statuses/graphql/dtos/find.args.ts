import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingStatusOrderByWithRelationInput } from './order-by.args'
import { BookingStatusWhereInput, BookingStatusWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.BookingStatusScalarFieldEnum, {
  name: 'BookingStatusScalarFieldEnum',
})

@ArgsType()
class FindManyBookingStatusArgsStrict
  implements RestrictProperties<FindManyBookingStatusArgsStrict, Omit<Prisma.BookingStatusFindManyArgs, 'include' | 'select'>>
{
  where: BookingStatusWhereInput
  orderBy: BookingStatusOrderByWithRelationInput[]
  cursor: BookingStatusWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.BookingStatusScalarFieldEnum])
  distinct: Prisma.BookingStatusScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingStatusArgs extends PartialType(
  FindManyBookingStatusArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingStatusArgs {
  where: BookingStatusWhereUniqueInput
}