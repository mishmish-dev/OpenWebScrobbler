import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp, faLastfm } from '@fortawesome/free-brands-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';

import { PROVIDER_BANDCAMP, PROVIDER_DISCOGS, PROVIDER_LASTFM, PROVIDER_NAME } from 'Constants';
import type { Provider } from 'Constants';

import AlbumCard from './AlbumCard';
import type { ComponentProps } from 'react';

import './AlbumCard.css';

const providerIcons: Partial<Record<Provider, typeof faBandcamp>> = {
  [PROVIDER_LASTFM]: faLastfm,
  [PROVIDER_BANDCAMP]: faBandcamp,
  [PROVIDER_DISCOGS]: faRecordVinyl,
};

export default function AlbumCardWithIcon({
  provider,
  ...props
}: ComponentProps<typeof AlbumCard> & { provider: Provider }) {
  const icon = providerIcons[provider];

  if (!icon) return <AlbumCard {...props} />;

  return (
    <div style={{ position: 'relative' }}>
      <FontAwesomeIcon icon={icon} className="albumCard-provider" title={PROVIDER_NAME[provider]} />
      <AlbumCard {...props} />
    </div>
  );
}
