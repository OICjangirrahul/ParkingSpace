import { ObjectType } from '@nestjs/graphql'
import { BookingStatus as BookingStatusType } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@ObjectType()
export class BookingStatus implements RestrictProperties<BookingStatus,BookingStatusType> {
    // Todo Add below to make optional fields optional.
    // @Field({ nullable: true })
}
