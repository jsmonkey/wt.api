import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'wt_chat_user_role',
})
export default class ChatUserRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
