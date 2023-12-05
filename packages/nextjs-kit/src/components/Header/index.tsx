import {
	Header as ReactKitHeader,
	isNavItemArray,
	type NavHeaderProps,
	type NavItem,
} from '@pantheon-systems/react-kit/components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = (props: NavHeaderProps) => {
	const { events } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen((prev) => !prev);
	useEffect(() => {
		events.on('routeChangeComplete', () => {
			setIsOpen(false);
		});

		return () => {
			events.off('routeChangeComplete', () => {
				setIsOpen(false);
			});
		};
	});
	return (
		<ReactKitHeader
			{...props}
			linkComponent={props?.linkComponent ? props.linkComponent : Link}
			mobileNavHandler={[isOpen, handleOpen]}
		/>
	);
};

export { Header, NavHeaderProps, NavItem, isNavItemArray };
