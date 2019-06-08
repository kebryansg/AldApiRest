import {Controller, Param, Body, Get, Post, Put, Delete, JsonController} from "routing-controllers";
import {getConnection} from "typeorm";
import {Producto} from "../entity/Producto";

@JsonController()
export class ProductoController {

    @Get("/producto")
    getAll() {
        return getConnection().manager.find(Producto);
    }

    @Get("/producto/:id")
    getOne(@Param("id") id: number) {
        return getConnection().manager.findOne(Producto, id);
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