import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { SlotTypeOrderByWithRelationInput } from './order-by.args'
import { SlotTypeWhereInput, SlotTypeWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

registerEnumType(Prisma.SlotTypeScalarFieldEnum, {
  name: 'SlotTypeScalarFieldEnum',
})

@ArgsType()
class FindManySlotTypeArgsStrict
  implements RestrictProperties<FindManySlotTypeArgsStrict, Omit<Prisma.SlotTypeFindManyArgs, 'include' | 'select'>>
{
  where: SlotTypeWhereInput
  orderBy: SlotTypeOrderByWithRelationInput[]
  cursor: SlotTypeWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.SlotTypeScalarFieldEnum])
  distinct: Prisma.SlotTypeScalarFieldEnum[]
}

@ArgsType()
export class FindManySlotTypeArgs extends PartialType(
  FindManySlotTypeArgsStrict,
) {}

@ArgsType()
export class FindUniqueSlotTypeArgs {
  where: SlotTypeWhereUniqueInput
}