///<reference path ="Interface/Interfaces.ts"/>
var rds;
(function (rds) {
    var RDSTable = /** @class */ (function () {
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
        function RDSTable(content, probability, unique, always, enabled, table, count) {
            this.rdsContent = content;
            this.rdsProbability = probability;
            this.rdsUnique = unique;
            this.rdsAlways = always;
            this.rdsEnabled = enabled;
            this.rdsTable = table;
            this.count = count;
            this.rdsPostResultEvaluation = new Event('heh');
            this.rdsHit = new Event('heh');
            this.rdsPreResultEvaluation = new Event('heh');
        }
        RDSTable.prototype.OnRDSPreResultEvaluation = function (e) {
            throw new Error("Method not implemented.");
        };
        RDSTable.prototype.OnRDSHit = function (e) {
            throw new Error("Method not implemented.");
        };
        RDSTable.prototype.OnRDSPostResultEvaluation = function (e) {
            throw new Error("Method not implemented.");
        };
        return RDSTable;
    }());
    rds.RDSTable = RDSTable;
})(rds || (rds = {}));
