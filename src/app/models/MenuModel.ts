
import {Category} from 'src/app/models/category';
import {Product} from 'src/app/models/product';

export class MenuModel
{
  catalog_id:number;
  catalog_description :string;
  Category:Category[];


  constructor(ParentID:number,catalog_description:string,Category:Category[]){
    this.catalog_id=ParentID;
    this.catalog_description=catalog_description;
    this.Category=Category;




  }


}
