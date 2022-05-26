export interface Cart {
	Ids: number;
	title: string | undefined;
	author: string | undefined;
	price: number;
	img: string | undefined;
	cartCount: number;
}

export interface Items {
	Ids: number;
	title: string | undefined;
	author: string | undefined;
	price: number;
	img: string | undefined;
	cartCount: number;
}

export interface CartItems {
	cart: Cart[];
	amount: number;
	total: number;
}
