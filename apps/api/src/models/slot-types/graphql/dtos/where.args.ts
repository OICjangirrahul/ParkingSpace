import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SlotTypeWhereUniqueInput {
  id: number
}

@InputType()
export class SlotTypeWhereInputStrict implements RestrictProperties<SlotTypeWhereInputStrict, Prisma.SlotTypeWhereInput> {
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: SlotTypeWhereInput[]
  OR: SlotTypeWhereInput[]
  NOT: SlotTypeWhereInput[]
}

@InputType()
export class SlotTypeWhereInput extends PartialType(
  SlotTypeWhereInputStrict,
) {}

@InputType()
export class SlotTypeListRelationFilter {
  every?: SlotTypeWhereInput
  some?: SlotTypeWhereInput
  none?: SlotTypeWhereInput
}

@InputType()
export class SlotTypeRelationFilter {
  is?: SlotTypeWhereInput
  isNot?: SlotTypeWhereInput
}
