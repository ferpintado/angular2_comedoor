export class Place {

	constructor(
		public _id: string,
		public name: string,
		public address: string,
		public schedule: string,
		public geo_location?: any,
		public menu?: any[],
		public stats?: any
		 ){

	}
}