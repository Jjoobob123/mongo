import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: ' 유저를 생성하는 API', description: ' 유저 생성' })
  @ApiCreatedResponse({ description: ' 유저 생성', type: User })
  async create(@Body() createUserDto: CreateUserDto) {
    const user: User = await this.userService.createUser(createUserDto);
    return user;
  }

  @Get()
  @ApiOperation({
    summary: ' 모든 유저 조희 API',
    description: ' 모든 유저 조회',
  })
  @ApiCreatedResponse({ description: ' 모든 유저 조회', type: User })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
