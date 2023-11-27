import {
	Header as ReactKitHeader,
	isNavItemArray,
	type NavHeaderProps,
	type NavItem,
} from '@pantheon-systems/react-kit/components/Header';
import Link from 'next/link';

const Header = (props: NavHeaderProps) => {
	return (
		<ReactKitHeader
			{...props}
			linkComponent={props?.linkComponent ? props.linkComponent : Link}
		/>
	);
};

export { Header, NavHeaderProps, NavItem, isNavItemArray };
