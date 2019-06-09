import {
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    JsonController,
    Controller,
    QueryParams
} from "routing-controllers";
import {getManager, getRepository} from "typeorm";
import {Producto} from "../entity/Producto";

@JsonController()
export class ProductoController {

    @Get("/producto")
    async getAll(@QueryParams() params: any) {
        let [items, count] = await getRepository(Producto).findAndCount({
            select: [
              "IDPD", "Codigo", "CodigoExterno", "Nombre"
            ],
            skip: params.offset | 0,
            take: params.limite | 5
        });

        return {
            items: items,
            count: count
        };
    }

    @Get("/producto/:id")
    getOne(@Param("id") id: number) {
        return getManager().findOne(Producto, id);
    }

    @Post("/users")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

}