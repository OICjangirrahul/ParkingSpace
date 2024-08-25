import { InputType, PickType } from '@nestjs/graphql'
import { SlotType } from '../entity/slot-type.entity'

@InputType()
export class CreateSlotTypeInput extends PickType(SlotType,[],InputType) {}

