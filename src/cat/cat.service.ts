import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return ("Hello cat controller Meow");
    }

    public introduct(): string {
        return ("My name is TOM");
    }

}
