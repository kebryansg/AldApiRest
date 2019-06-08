import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    IDCT: number;

    @Column()
    Nombre: string;

}