import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: '주현', description: '이름', required: true })
	@IsString()
	name: string;

	@ApiProperty({ example: 12, description: '나이', required: true })
	@IsNumber()
	age: number;
}
