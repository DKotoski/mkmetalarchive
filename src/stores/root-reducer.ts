import * as BandListStore from './band-list-store';
import * as BandPageStore from './band-page-store';
import * as AlbumPageStore from './album-page-store';
import * as PlayerStore from './player-store';


const reducers = {
    bandList: BandListStore.slice.reducer,
    bandPage: BandPageStore.slice.reducer,
    albumPage: AlbumPageStore.slice.reducer,
    player: PlayerStore.slice.reducer
};

export {reducers};