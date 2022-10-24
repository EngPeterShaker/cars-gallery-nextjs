import NextLink from "next/link";
const Config = {
	linkComponent: ({
		children,
		href,
		...linkProps
	}: {
		children: any;
		href: any;
	}) => {
		// we only want to use next/link for internal links
		// external links are better served with an basic a tag
		if (typeof href === "object" || href.indexOf("/") === 0) {
			return (
				<NextLink href={href}>
					<a {...linkProps}>{children}</a>
				</NextLink>
			);
		}

		return (
			<a href={href} {...linkProps}>
				{children}
			</a>
		);
	},
};

export default Config;
