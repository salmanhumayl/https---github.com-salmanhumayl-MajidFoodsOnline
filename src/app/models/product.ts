export class Product {
 // category_id: number;
  item_id:number;
  item_description: string;
  //item_size:string;
  //item_uom:string;
  item_price :number;
  oldprice:number

  item_primary_thumb:string="";
  item_secondary_thumb:string="";
  qty:number=1;
  itemsimages: string[];
  itemspecification:string[];



  constructor(item_id,item_description,item_price=0,oldprice=0,
    item_primary_thumb='',
    item_secondary_thumb='',
    extraImg:string[]
               )
     {
      this.item_id=item_id;
      this.item_description=item_description;
      this.item_price=item_price;
      this.oldprice=oldprice;
      this.item_primary_thumb=item_primary_thumb;
      this.item_secondary_thumb = item_secondary_thumb
     // this.extraImages=extraImg
    }
}
