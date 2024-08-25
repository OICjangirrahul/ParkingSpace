import { Module } from '@nestjs/common'
import { SlotTypesService } from './graphql/slot-types.service'
import { SlotTypesResolver } from './graphql/slot-types.resolver'
import { SlotTypesController } from './rest/slot-types.controller'

@Module({
  providers: [SlotTypesResolver, SlotTypesService],
  exports: [SlotTypesService],
  controllers: [SlotTypesController],
})
export class SlotTypesModule {}
