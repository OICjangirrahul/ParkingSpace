import { User } from '@prisma/client'
import { IsDate, IsString, IsInt } from 'class-validator'
import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
    uid: string
    createdAt: Date
    updatedAt: Date
    name: string
    image: string

}

