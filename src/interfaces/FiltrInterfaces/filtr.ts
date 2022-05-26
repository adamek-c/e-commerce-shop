export interface Book {
	id: string;
	title: string;
	released?: string;
	edition?: string;
	author?: string;
	rated?: number;
	description: string;
	img: string;
	price: number;
	category?: string;
	cartCount: number;
}

export interface Language {
	name?: string | undefined;
	checked?: boolean;
}

export interface Price {
	minPrice: number;
	maxPrice: number;
	checked?: boolean;
}

export interface FilterBooks {
	items: Book[];
	all_items: Book[];
	active: boolean;
	checked: boolean;
	checkedPrice: boolean;
	bookName: string | undefined;
	bookLanguage: string | undefined;
	min_price: number;
	max_price: number;
}
