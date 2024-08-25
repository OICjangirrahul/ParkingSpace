import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class SlotTypeQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.SlotTypeScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.SlotTypeScalarFieldEnum))
  searchBy?: string
}

