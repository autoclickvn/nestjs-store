import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  // GET /users
  @Get()
  async index() {
    return await this.service.findAll();
  }

  // GET /users/:id
  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  // POST /users
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.service.create(createUserDto);
  }

  // PUT /users/:id
  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return await this.service.update(id, updateUserDto);
  // }

  // DELETE /users/:id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
