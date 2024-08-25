import { ObjectType } from '@nestjs/graphql'
import { SlotType as SlotTypeType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class SlotType implements RestrictProperties<SlotType,SlotTypeType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
