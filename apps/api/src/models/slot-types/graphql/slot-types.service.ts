import { Injectable } from '@nestjs/common'
import { FindManySlotTypeArgs, FindUniqueSlotTypeArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateSlotTypeInput } from './dtos/create-slot-type.input'
import { UpdateSlotTypeInput } from './dtos/update-slot-type.input'

@Injectable()
export class SlotTypesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSlotTypeInput: CreateSlotTypeInput) {
    return this.prisma.slotType.create({
      data: createSlotTypeInput,
    })
  }

  findAll(args: FindManySlotTypeArgs) {
    return this.prisma.slotType.findMany(args)
  }

  findOne(args: FindUniqueSlotTypeArgs) {
    return this.prisma.slotType.findUnique(args)
  }

  update(updateSlotTypeInput: UpdateSlotTypeInput) {
    const { id, ...data } = updateSlotTypeInput
    return this.prisma.slotType.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueSlotTypeArgs) {
    return this.prisma.slotType.delete(args)
  }
}
