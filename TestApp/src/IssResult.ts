export class IssResult
    {
        message: string ;
        timestamp: number  ;
        iss_position: position  ;

        /**
         *
         */
        constructor() {
            this.timestamp = Date.now();
        }
    }

    export class position
    {
        latitude : string  ;
        longitude : string  ;
    }