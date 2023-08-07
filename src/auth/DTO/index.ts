import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, example: 'mac' })
  username: string;

  @ApiProperty({ type: String, example: 'password' })
  password: string;
}
