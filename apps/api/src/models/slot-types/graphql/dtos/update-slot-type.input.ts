import { CreateSlotTypeInput } from './create-slot-type.input'
import { InputType, PartialType } from '@nestjs/graphql'
import { SlotType } from '@prisma/client'

@InputType()
export class UpdateSlotTypeInput extends PartialType(CreateSlotTypeInput) {
  id: SlotType['id']
}
