export interface Cart {
	Ids: number;
	title: string | undefined;
	author: string | undefined;
	price: number | undefined;
	img: string | undefined;
}

export interface Items {
	Ids: number;
	title: string | undefined;
	author: string | undefined;
	price: number | undefined;
	img: string | undefined;
}

export interface CartItems {
	cart: Cart[];
	amount: number;
	total: number;
}
