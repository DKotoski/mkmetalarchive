declare module Models {
    export interface DataLink {
        id: string;
        linkToData: string;
    }

    export interface Band extends DataLink {
        name: string;
        location: string;
        status: string;
        genre: string;
        bio: string | LocalizedString;
        albums: DataLink[];
    }

    export interface Album extends DataLink {
        name: string;
        describtion: string | LocalizedString;
        length: number;
        year: number;
        songs: Song[];
    }

    export interface Song {
        id: string;
        name: string;
        lenght: number;
        lyrics?: string | LocalizedString;
        playUrl: string;
    }

    export interface LocalizedString {
        [lang: string]: string;
    }

    export interface PlayerEntry{
        name: string;
        url: string;
    }
}