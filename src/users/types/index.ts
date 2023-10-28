import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        email: 'ivan@gmail.com',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$a05jA04/RxS1GL5dUrSPzeuVaqJJF1hAGFHvnb7iNShLswnArQNJ2',
  })
  password: string;

  @ApiProperty({ example: 'ivan@gmail.com' })
  email: string;

  @ApiProperty({ example: '023-10-28T02:08:16.194Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-10-28T02:08:16.194Z' })
  createdAt: string;
}
