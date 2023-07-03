type CMSEndpointObjectBooleans<Key> = {
	[key in Key extends 'isValid' ? 'isValid' : 'hasUmami']: boolean;
};
type CMSEndpointObjectStrings = {
	[key in 'envVar' | 'endpoint']: string;
};

export type CMSEndpointObject<BooleanKey> = CMSEndpointObjectStrings &
	CMSEndpointObjectBooleans<BooleanKey>;
