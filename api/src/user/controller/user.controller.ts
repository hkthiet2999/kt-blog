import { UserService } from './../service/user.service';
import { User } from '../models/user.interface';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){

    }

    @Post()
    create(@Body() user: User): Observable<User>{
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(@Param() params): Observable<User>{
        return this.userService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<User[]>{
        return this.userService.findAll();

    }

    @Delete(':id')
    deleteOne(@Param() id: number): Observable<User>{
        return this.userService.deleteOne(id);
    }

    @Put(':id')
    updateOne(@Param() id: number, @Body() user: User ): Observable<User>{
        return this.userService.updateOne(id, user);
    }
}

