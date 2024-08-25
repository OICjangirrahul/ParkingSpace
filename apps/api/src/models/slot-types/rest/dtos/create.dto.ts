import { OmitType } from '@nestjs/swagger'
import { SlotTypeEntity } from '../entity/slot-type.entity'

export class CreateSlotType extends OmitType(SlotTypeEntity, [
  'createdAt',
  'updatedAt',
  'id',
]) {}
