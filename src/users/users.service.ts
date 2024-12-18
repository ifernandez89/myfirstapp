import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  /*private users:any[] = [
    {
      id: 1,
      name: 'Ignacio Fernández',
      phone: '3434704479',
    },
    {
      id: 1,
      name: 'Gisela Cuenca',
      phone: '3434655887',
    },
  ];*/

  constructor(private prisma: PrismaService) {}

  getUsers() {
    //return this.users;
    return this.prisma.user.findMany();
  }

  createUsers(user:CreateUserDto){

/*this.users.push(user);*/
return this.prisma.user.create({data:user})
    /*return {
        ...user,
        id:this.users.length+1,
    }*/
  }
}
