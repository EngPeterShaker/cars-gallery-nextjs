export const MAX_ITEMS_PER_PAGE = 4;
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: MAX_ITEMS_PER_PAGE,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
};

export default responsive;
