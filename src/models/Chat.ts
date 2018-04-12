import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

import ChatType from './ChatType';

@Entity({
    name: 'wt_chat',
})
export default class Chat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => ChatType)
    @JoinColumn({ name: 'type_id' })
    type: ChatType;
    
}
