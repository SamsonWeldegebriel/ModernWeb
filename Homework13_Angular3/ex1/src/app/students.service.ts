import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  constructor() { }

  getData(){
    return [
      {_id: 1, name: 'Asaad Saad', studID: '12345', email: 'asaad@mum.edu'},
      {_id: 2, name: 'Samson Mebrahtu', studID: '11111', email: 'samson@mum.edu'}
    ]
  }

}
