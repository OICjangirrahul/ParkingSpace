import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class BookingStatusWhereUniqueInput {
  id: number
}

@InputType()
export class BookingStatusWhereInputStrict implements RestrictProperties<BookingStatusWhereInputStrict, Prisma.BookingStatusWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingStatusWhereInput[]
  OR: BookingStatusWhereInput[]
  NOT: BookingStatusWhereInput[]
}

@InputType()
export class BookingStatusWhereInput extends PartialType(
  BookingStatusWhereInputStrict,
) {}

@InputType()
export class BookingStatusListRelationFilter {
  every?: BookingStatusWhereInput
  some?: BookingStatusWhereInput
  none?: BookingStatusWhereInput
}

@InputType()
export class BookingStatusRelationFilter {
  is?: BookingStatusWhereInput
  isNot?: BookingStatusWhereInput
}
