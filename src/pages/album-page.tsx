import React from 'react';
import { AppDispatch } from '../stores/app-thunk';
import { getAlbum } from '../stores/album-page-store';
import ApplicationState from '../stores/application-state';
import { connect } from 'react-redux';
import { onInAlbumPlay } from '../stores/player-store';
import AlbumCard from '../components/album-card';

export interface AlbumPageProps {
    match: {
        params: {
            bandName: string;
            albumName: string;
        }
    }

    album?: Models.Album;
    onSongPlay: (songs: Models.Song[], songToPlay: Models.Song) => void;
    init: (bandKey: string, albumKey: string) => void;
    onAlbumPlay: (songs: Models.Song[]) => void;

}

const AlbumPage = (props: AlbumPageProps) => {
    React.useEffect(() => {
        props.init(props.match.params.bandName, props.match.params.albumName);
    }, []);

    return (
        <>{
            props.album ?
                <>
                    <AlbumCard
                        bandId={props.match.params.bandName}
                        albumId={props.match.params.albumName}
                        name={props.album.name}
                        year={props.album.year}
                        length={props.album.length}
                        cover={props.album.cover}
                        songs={props.album.songs}
                        onAlbumPlay={props.onAlbumPlay}
                        onSongPlay={props.onSongPlay} />
                </> : null
        }
        </>
    );
}


const mapDispatchToProps = (dispatch: AppDispatch) => ({
    init: (bandKey: string, albumKey: string) => {
        dispatch(getAlbum(bandKey, albumKey));
    },
    onSongPlay: (songs: Models.Song[], songToPlay: Models.Song) => {
        dispatch(onInAlbumPlay(songs, songToPlay));
    },
    onAlbumPlay: (songs: Models.Song[]) => {
        dispatch(onInAlbumPlay(songs, songs[0]));
    }
});

const mapStateToProps = (state: ApplicationState) => {
    return {
        album: state.albumPage.album
    };
}

const AlbumPageContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumPage);

export default AlbumPageContainer;