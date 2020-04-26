export class Stockdetail {

    ItemId : number;
    ItemName : string;
    Quantity : number;
    PurchasePrice : string;
    SellingPrice : string;

    constructor( ItemName : string, Quantity : number, PurchasePrice : string, SellingPrice : string ){

        this.ItemName = ItemName;
        this.Quantity = Quantity;
        this.PurchasePrice = PurchasePrice;
        this.SellingPrice = SellingPrice;

    }

    

}
