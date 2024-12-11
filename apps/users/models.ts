import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @Column({nullable: true})
    firstName!: string;

    @Column({nullable: true})
    lastName!: string;

    @Column({ unique: true})
    email!: string;

    @Column({ default: false })
    isPremium!: boolean;

    @Column({ default: false })
    isAdmin!: boolean;

    @Column({ default: false })
    isBanned!: boolean;

    @Column({ default: false })
    isVerified!: boolean;
}


module.exports = [User]