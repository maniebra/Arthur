// Models for app products

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class Model extends BaseEntity {

}

module.exports = [Model]