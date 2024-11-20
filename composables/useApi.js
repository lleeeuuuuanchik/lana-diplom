import products from '@/api/products.js';
import catalog  from '@/api/catalog.js';
import slider   from '@/api/slider.js';
import review   from '@/api/review.js';
import user     from '@/api/user.js';
import stories  from '@/api/stories.js';

export const useApi = () => {
	return {
		products,
		catalog,
		slider,
		review,
		user,
		stories,
	};
};