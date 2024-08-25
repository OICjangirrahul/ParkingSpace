import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query
} from '@nestjs/common'

import { PrismaService } from 'src/common/prisma/prisma.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateSlotType } from './dtos/create.dto'
import { SlotTypeQueryDto } from './dtos/query.dto'
import { UpdateSlotType } from './dtos/update.dto'
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { SlotTypeEntity } from './entity/slotType.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/types'
import { checkRowLevelPermission } from 'src/common/auth/util'


@ApiTags('slot-types')
@Controller('slot-types')
export class SlotTypesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SlotTypeEntity })
  @Post()
  create(@Body() createSlotTypeDto: CreateSlotType, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createSlotTypeDto.uid)
    return this.prisma.slotType.create({ data: createSlotTypeDto })
  }

  @ApiOkResponse({ type: [SlotTypeEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: SlotTypeQueryDto) {
    return this.prisma.slotType.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    })
  }

  @ApiOkResponse({ type: SlotTypeEntity })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.prisma.slotType.findUnique({ where: { id } })
  }

  @ApiOkResponse({ type: SlotTypeEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSlotTypeDto: UpdateSlotType,
    @GetUser() user: GetUserType,
  ) {
    const slotType = await this.prisma.slotType.findUnique({ where: { id } })
    checkRowLevelPermission(user, slotType.uid)
    return this.prisma.slotType.update({
      where: { id },
      data: updateSlotTypeDto,
    })
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: number, @GetUser() user: GetUserType) {
    const slotType = await this.prisma.slotType.findUnique({ where: { id } })
    checkRowLevelPermission(user, slotType.uid)
    return this.prisma.slotType.delete({ where: { id } })
  }
}
