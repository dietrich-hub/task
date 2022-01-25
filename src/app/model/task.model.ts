export class TodoModel {
  constructor(public id : number,public description : string,public editable : boolean, public isDelete: boolean) {}
}

export class Remember {
  constructor(public id : number,public description : string) {
  }
}
