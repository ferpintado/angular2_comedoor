export class Order {

	constructor(public address: string,
		public timestamp: string,
		public place: string,
		public user: string,
		public order: any[],
		public delivered: boolean
		 ){

	}
}