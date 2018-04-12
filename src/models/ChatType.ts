import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'wt_chat_type',
})
export default class ChatType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
