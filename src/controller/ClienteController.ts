import {
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    JsonController,
    QueryParams
} from "routing-controllers";
import {getRepository} from "typeorm";
import {Cliente} from "../entity/Cliente";

@JsonController('/cliente')
export class ClienteController {

    @Get("")
    async getAll(@QueryParams() params: any) {
        let [items, count] = await getRepository(Cliente).findAndCount({
            select: [
                "IDCT", "CEDRUC", "Nombre",
            ],
            skip: params.offset | 0,
            take: params.limite | 5,

        });

        return {
            items: items,
            count: count
        };
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return getRepository(Cliente).findOne(id);
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