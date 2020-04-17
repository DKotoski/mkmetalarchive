import {RouterState} from 'connected-react-router';
import { BandStore } from './band-list-store';
import { BandPageStore } from './band-page-store';
import { AlbumPageStore } from './album-page-store';
import { PlayerStore } from './player-store';

export default interface ApplicationState{
    bandList: BandStore;
    bandPage: BandPageStore;
    albumPage: AlbumPageStore;
    player: PlayerStore;
    router?: RouterState;
}