import { Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Module({
  providers: [AuthService]
})
export class AuthModule {}
