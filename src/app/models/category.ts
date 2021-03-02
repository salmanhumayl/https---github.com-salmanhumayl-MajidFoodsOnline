import {Product} from 'src/app/models/product';

export class Category{
  Category_ID:number;
  Category_Description:string;
  item:Product[];

  constructor(ID:number,Category_Description:string,product:Product[]
               )
     {
       this.Category_ID=ID;
       this.Category_Description=Category_Description;
       this.item=product;
    }






}
