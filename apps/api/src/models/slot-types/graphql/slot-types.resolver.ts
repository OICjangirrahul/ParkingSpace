import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SlotTypesService } from './slot-types.service'
import { SlotType } from './entity/slot-type.entity'
import { FindManySlotTypeArgs, FindUniqueSlotTypeArgs } from './dtos/find.args'
import { CreateSlotTypeInput } from './dtos/create-slot-type.input'
import { UpdateSlotTypeInput } from './dtos/update-slot-type.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'

@Resolver(() => SlotType)
export class SlotTypesResolver {
  constructor(private readonly slotTypesService: SlotTypesService,
    private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @Mutation(() => SlotType)
  createSlotType(@Args('createSlotTypeInput') args: CreateSlotTypeInput, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, args.uid)
    return this.slotTypesService.create(args)
  }

  @Query(() => [SlotType], { name: 'slotTypes' })
  findAll(@Args() args: FindManySlotTypeArgs) {
    return this.slotTypesService.findAll(args)
  }

  @Query(() => SlotType, { name: 'slotType' })
  findOne(@Args() args: FindUniqueSlotTypeArgs) {
    return this.slotTypesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => SlotType)
  async updateSlotType(@Args('updateSlotTypeInput') args: UpdateSlotTypeInput, @GetUser() user: GetUserType) {
    const slotType = await this.prisma.slotType.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, slotType.uid)
    return this.slotTypesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => SlotType)
  async removeSlotType(@Args() args: FindUniqueSlotTypeArgs, @GetUser() user: GetUserType) {
    const slotType = await this.prisma.slotType.findUnique(args)
    checkRowLevelPermission(user, slotType.uid)
    return this.slotTypesService.remove(args)
  }
}
