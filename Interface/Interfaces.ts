
namespace rds 
{
/**This interface contains the properties an object must have to be a valid rds result object. */
export interface IRDSObject 

{
    /** The probability for this object to be (part of) the result*/
   rdsProbability: number;
   /**Whether this object may be contained only once in the result set */
   rdsUnique: boolean;
   rdsAlways: boolean;
   rdsEnabled: boolean;
   rdsTable:RDSTable;
   rdsPreResultEvaluation:Event;
   rdsHit:Event;
   rdsPostResultEvaluation:Event;
   OnRDSPreResultEvaluation(e:any):void;
   OnRDSHit(e:any):void;
   OnRDSPostResultEvaluation (e:any):void;
}
export interface IRDSTable extends IRDSObject
{
    count:number;
    rdsContent:Array<IRDSObject>;
}
}
