import { Row } from 'reactstrap';

import AlbumCard from 'components/AlbumCard';
import { PROVIDER_BANDCAMP, PROVIDER_DISCOGS, PROVIDER_LASTFM } from 'Constants';

import type { MouseEventHandler } from 'react';
import type { Album } from 'utils/types/album';

export default function AlbumList({
  albums = [],
  className = '',
  onClick,
  showProvider = false,
}: {
  albums: Album[];
  className: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  showProvider?: boolean;
}) {
  return (
    <Row className="listOfAlbums mb-4" data-cy="AlbumList">
      {albums.map((album, i) => (
        <div className={className} key={i}>
          <a href={album.url} data-album-index={i} onClick={onClick}>
            <AlbumCard
              artist={album.artist}
              name={album.name || ''}
              background={album.cover}
              sizes={album.coverSizes}
              year={album.releasedate || null}
              className="mt-4"
              interactive
              provider={
                'discogsId' in album ? PROVIDER_DISCOGS : 'bandId' in album ? PROVIDER_BANDCAMP : PROVIDER_LASTFM
              }
              showProvider={showProvider}
            />
          </a>
        </div>
      ))}
    </Row>
  );
}
