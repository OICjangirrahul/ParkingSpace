import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BookingStatusOrderByWithRelationInputStrict
  implements RestrictProperties<BookingStatusOrderByWithRelationInputStrict, Prisma.BookingStatusOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class BookingStatusOrderByWithRelationInput extends PartialType(
  BookingStatusOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingStatusOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
