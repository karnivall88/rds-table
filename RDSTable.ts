
///<reference path ="Interface/Interfaces.ts"/>
namespace rds
{

    export class RDSTable implements IRDSTable
    {
        count: number;        
        rdsContent: IRDSObject[];
        rdsProbability: number;
        rdsUnique: boolean;
        rdsAlways: boolean;
        rdsEnabled: boolean;
        rdsTable: RDSTable;
        rdsPreResultEvaluation: Event;
        rdsHit: Event;
        rdsPostResultEvaluation: Event;
        /**
         * 
         * @param content Array of tables with content
         * @param probability Probability to drop
         * @param unique unique defined by True False
         * @param always Item will drop always disregarding probability
         * @param enabled Enabled or not
         * @param table Other tables
         * @param count How many objects will drop
         */
        constructor(content:IRDSObject[],probability:number,unique:boolean,always:boolean,enabled:boolean,table:RDSTable,count:number)
        {
            this.rdsContent = content;
            this.rdsProbability = probability;
            this.rdsUnique  = unique;
            this.rdsAlways = always;
            this.rdsEnabled = enabled;
            this.rdsTable = table;
            this.count = count;
            this.rdsPostResultEvaluation = new Event('OnRDSPreResultEvaluation');
            this.rdsHit = new Event('OnRdsHit');
            this.rdsPreResultEvaluation = new Event('OnrdsPreResultEvaluation');
        }
 
        private mcontents:IRDSObject[] = [];

        get rdsCount(){return this.count;}
        set rdsCount(count:number){this.count = count;}

        OnRDSPreResultEvaluation(e: Event): void {
          throw new Error("Method not implemented.");
            
        }
        OnRDSHit(e: Event): void {
            throw new Error("Method not implemented.");
        }
        OnRDSPostResultEvaluation(e: Event): void {
            throw new Error("Method not implemented.");
        }

        
       
    }

}
