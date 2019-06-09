import {
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    Controller,
    QueryParams
} from "routing-controllers";
import {getRepository} from "typeorm";
import {Producto} from "../entity/Producto";

@Controller("/producto")
export class ProductoController {

    @Get("")
    async getAll(@QueryParams() params: any) {

        let query = getRepository(Producto)
            .createQueryBuilder()
            .select(["IDPD", "Codigo", "CodigoExterno", "Nombre"])
            .where("NOT(IDPD IN (:...exclude))", { exclude: params.exclude.split(',') || [] })
            .andWhere(`(Nombre LIKE :search OR Codigo LIKE :search)`, { search: `%${params.search}%` })
            .skip(params.offset | 0)
            .take(params.limite | 5);
        return {
            items: await query.getRawMany(),
            count: await query.getCount()
        };
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return getRepository(Producto).findOne(id);
    }

    @Post("")
    post(@Body() body: any) {
        return "Saving user...";
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() body: any) {
        return "Updating a user...";
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

}