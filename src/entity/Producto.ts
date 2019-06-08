import {
    BaseEntity,
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    RelationId
} from "typeorm";
// import {Fabricante} from "./Fabricante";
// import {Categoria} from "./Categoria";
// import {Grupo} from "./Grupo";
// import {SubGrupo} from "./SubGrupo";
// import {Presentacion} from "./Presentacion";
// import {Marca} from "./Marca";
// import {Unidad} from "./Unidad";
// import {TipoDeducible} from "./TipoDeducible";
// import {ImpuestoTarifa} from "./ImpuestoTarifa";
// import {ImpuestoRetencion} from "./ImpuestoRetencion";
// import {DCDetalle} from "./DCDetalle";
// import {DTHDetalle} from "./DTHDetalle";
// import {DVDetalle} from "./DVDetalle";
// import {FCDetalle} from "./FCDetalle";
// import {FVDetalle} from "./FVDetalle";
// import {Inventario} from "./Inventario";
// import {Kardex} from "./Kardex";
// import {MovInvDet} from "./MovInvDet";
// import {ProductoImagen} from "./ProductoImagen";
// import {ProductoInfoAdicional} from "./ProductoInfoAdicional";
// import {ProductoUnidad} from "./ProductoUnidad";
// import {ProformaVtaDet} from "./ProformaVtaDet";
// import {THDetalle} from "./THDetalle";


@Entity("Producto", {schema: "dbo"})
export class Producto {

    @Column("int", {
        nullable: false,
        primary: true,
        name: "IDPD"
    })
    IDPD: number;

    /*
        @ManyToOne(type => Fabricante, fabricante => fabricante.productos, {})
        @JoinColumn({name: 'IDFB'})
        idfb: Fabricante | null;


        @ManyToOne(type => Categoria, categoria => categoria.productos, {})
        @JoinColumn({name: 'IDCT'})
        idct: Categoria | null;


        @ManyToOne(type => Grupo, grupo => grupo.productos, {})
        @JoinColumn({name: 'IDGP'})
        idgp: Grupo | null;


        @ManyToOne(type => SubGrupo, subGrupo => subGrupo.productos, {})
        @JoinColumn({name: 'IDSG'})
        idsg: SubGrupo | null;


        @ManyToOne(type => Presentacion, presentacion => presentacion.productos, {})
        @JoinColumn({name: 'IDPRE'})
        idpre: Presentacion | null;


        @ManyToOne(type => Marca, marca => marca.productos, {})
        @JoinColumn({name: 'IDMarca'})
        idMarca: Marca | null;


        @ManyToOne(type => Unidad, unidad => unidad.productos, {})
        @JoinColumn({name: 'IDUnidad'})
        idUnidad: Unidad | null;


        @ManyToOne(type => TipoDeducible, tipoDeducible => tipoDeducible.productos, {})
        @JoinColumn({name: 'IDDeducible'})
        idDeducible: TipoDeducible | null;


        @ManyToOne(type => ImpuestoTarifa, impuestoTarifa => impuestoTarifa.productos, {})
        @JoinColumn({name: 'IDIVA'})
        idiva: ImpuestoTarifa | null;


        @ManyToOne(type => ImpuestoTarifa, impuestoTarifa => impuestoTarifa.productos2, {})
        @JoinColumn({name: 'IDIRBP'})
        idirbp: ImpuestoTarifa | null;


        @ManyToOne(type => ImpuestoTarifa, impuestoTarifa => impuestoTarifa.productos3, {})
        @JoinColumn({name: 'IDICE'})
        idice: ImpuestoTarifa | null;


        @ManyToOne(type => ImpuestoRetencion, impuestoRetencion => impuestoRetencion.productos, {})
        @JoinColumn({name: 'IDRetencionIVA'})
        idRetencionIva: ImpuestoRetencion | null;


        @ManyToOne(type => ImpuestoRetencion, impuestoRetencion => impuestoRetencion.productos2, {})
        @JoinColumn({name: 'IDRetencionIR'})
        idRetencionIr: ImpuestoRetencion | null;
        */


    @Column("varchar", {
        nullable: false,
        length: 35,
        name: "Codigo"
    })
    Codigo: string;


    @Column("varchar", {
        nullable: true,
        length: 35,
        name: "CodigoExterno"
    })
    CodigoExterno: string | null;


    @Column("varchar", {
        nullable: false,
        length: 150,
        name: "Nombre"
    })
    Nombre: string;


    @Column("decimal", {
        nullable: false,
        scale: 4,
        name: "Costo"
    })
    Costo: number;


    @Column("decimal", {
        nullable: false,
        scale: 4,
        name: "PVP"
    })
    PVP: number;


    @Column("decimal", {
        nullable: false,
        scale: 4,
        name: "PVM"
    })
    PVM: number;


    @Column("decimal", {
        nullable: true,
        scale: 2,
        name: "Descuento"
    })
    Descuento: number | null;


    @Column("decimal", {
        nullable: true,
        scale: 4,
        name: "Subsidio"
    })
    Subsidio: number | null;


    @Column("decimal", {
        nullable: false,
        scale: 2,
        name: "Comision"
    })
    Comision: number;


    @Column("decimal", {
        nullable: false,
        scale: 2,
        name: "PCP"
    })
    PCP: number;


    @Column("int", {
        nullable: true,
        name: "Tipo"
    })
    Tipo: number | null;


    @Column("bit", {
        nullable: false,
        name: "IVA"
    })
    IVA: boolean;


    @Column("bit", {
        nullable: true,
        name: "IRBP"
    })
    IRBP: boolean | null;


    @Column("bit", {
        nullable: true,
        name: "ICE"
    })
    ICE: boolean | null;


    @Column("bit", {
        nullable: true,
        name: "Serie"
    })
    Serie: boolean | null;


    @Column("bit", {
        nullable: true,
        name: "Combo"
    })
    Combo: boolean | null;


    @Column("int", {
        nullable: true,
        name: "Clasificacion"
    })
    Clasificacion: number | null;


    @Column("decimal", {
        nullable: true,
        scale: 4,
        name: "Minimo"
    })
    Minimo: number | null;


    @Column("decimal", {
        nullable: true,
        scale: 4,
        name: "Maximo"
    })
    Maximo: number | null;


    @Column("varchar", {
        nullable: true,
        length: 800,
        name: "Observaciones"
    })
    Observaciones: string | null;


    @Column("bit", {
        nullable: true,
        name: "Estado"
    })
    Estado: boolean | null;

    /*
        @OneToMany(type => DCDetalle, dCDetalle => dCDetalle.idpd)
        dcDetalles: DCDetalle[];


        @OneToMany(type => DTHDetalle, dTHDetalle => dTHDetalle.idpd)
        dthDetalles: DTHDetalle[];


        @OneToMany(type => DVDetalle, dVDetalle => dVDetalle.idpd)
        dvDetalles: DVDetalle[];


        @OneToMany(type => FCDetalle, fCDetalle => fCDetalle.idpd)
        fcDetalles: FCDetalle[];


        @OneToMany(type => FVDetalle, fVDetalle => fVDetalle.idpd)
        fvDetalles: FVDetalle[];


        @OneToMany(type => Inventario, inventario => inventario.idpd)
        inventarios: Inventario[];


        @OneToMany(type => Kardex, kardex => kardex.idpd)
        kardexs: Kardex[];


        @OneToMany(type => MovInvDet, movInvDet => movInvDet.idpd)
        movInvDets: MovInvDet[];


        @OneToMany(type => ProductoImagen, productoImagen => productoImagen.idpd)
        productoImagens: ProductoImagen[];


        @OneToMany(type => ProductoInfoAdicional, productoInfoAdicional => productoInfoAdicional.idItem)
        productoInfoAdicionals: ProductoInfoAdicional[];


        @OneToMany(type => ProductoUnidad, productoUnidad => productoUnidad.idItem)
        productoUnidads: ProductoUnidad[];


        @OneToMany(type => ProformaVtaDet, proformaVtaDet => proformaVtaDet.idProducto)
        proformaVtaDets: ProformaVtaDet[];


        @OneToMany(type => THDetalle, tHDetalle => tHDetalle.idpd)
        thDetalles: THDetalle[];
    */
}
