import { PartialType } from '@nestjs/swagger'
import { CreateSlotType } from './create.dto'
import { SlotType } from '@prisma/client'

export class UpdateSlotType extends PartialType(CreateSlotType) {
  id: SlotType['id']
}

