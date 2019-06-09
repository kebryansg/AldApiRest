import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cliente", {schema: "dbo"})
export class Cliente {

    @PrimaryGeneratedColumn({
        type: "int",
        name: "IDCT"
    })
    IDCT: number;


    @Column("int", {
        nullable: true,
        name: "IDCG"
    })
    IDCG: number | null;


    @Column("int", {
        nullable: true,
        name: "IDCiudad"
    })
    IDCiudad: number | null;


    @Column("int", {
        nullable: true,
        name: "IDTipoIdentificacion"
    })
    IDTipoIdentificacion: number | null;


    @Column("varchar", {
        nullable: false,
        length: 20,
        name: "CEDRUC"
    })
    CEDRUC: string;


    @Column("varchar", {
        nullable: false,
        length: 50,
        name: "Nombre"
    })
    Nombre: string;


    @Column("varchar", {
        nullable: false,
        length: 120,
        name: "Direccion"
    })
    Direccion: string;


    @Column("varchar", {
        nullable: false,
        length: 50,
        name: "Telefono"
    })
    Telefono: string;


    @Column("varchar", {
        nullable: true,
        length: 25,
        name: "Celular"
    })
    Celular: string | null;


    @Column("varchar", {
        nullable: true,
        length: 50,
        name: "Email"
    })
    Email: string | null;


    @Column("bit", {
        nullable: true,
        name: "SujetoRetencion"
    })
    SujetoRetencion: boolean | null;


    @Column("varchar", {
        nullable: true,
        length: 1,
        name: "TipoContribuyente"
    })
    TipoContribuyente: string | null;


    @Column("varchar", {
        nullable: true,
        length: 1,
        name: "TipoEntidad"
    })
    TipoEntidad: string | null;


    @Column("varchar", {
        nullable: false,
        length: 2,
        name: "Tipo"
    })
    Tipo: string;


    @Column("bit", {
        nullable: true,
        name: "Estado"
    })
    Estado: boolean | null;

}