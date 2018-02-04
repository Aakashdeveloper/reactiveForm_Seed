export class Customer {

    constructor(public firstName = '',
        public lastName = '',
        public email = '',
        public sendCatalog = false,
        public addressType = 'home') { }
}
