// Models for app sample

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class Model extends BaseEntity {

}

module.exports = [Model]