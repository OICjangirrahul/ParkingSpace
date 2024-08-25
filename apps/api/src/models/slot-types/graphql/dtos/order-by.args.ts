import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class SlotTypeOrderByWithRelationInputStrict
  implements RestrictProperties<SlotTypeOrderByWithRelationInputStrict, Prisma.SlotTypeOrderByWithRelationInput>
{
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}


@InputType()
export class SlotTypeOrderByWithRelationInput extends PartialType(
  SlotTypeOrderByWithRelationInputStrict,
) {}

@InputType()
export class SlotTypeOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
