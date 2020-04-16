import axios, { AxiosResponse } from 'axios';

const resolveUrl = (url: string) => {
    // if dev use next
    return "/data/" + url;
}

const getAllBands = async () => {
    var bandLinks = (await axios.get<Models.DataLink[]>(resolveUrl("data.json"))).data;
    return getMultipleFromLinkList<Models.Band>(bandLinks);
}

const getBand = async (key: string) => {
    var bandLinks = (await axios.get(resolveUrl("data.json"))).data as Models.DataLink[];
    var bandLink = bandLinks.find(x=>x.id == key)!;
    var band = (await axios.get(resolveUrl(bandLink.linkToData))).data as Models.Band;
    
    return Promise.resolve(band);
}

const getBandAlbums = async(key: string) => {
    var bandLinks = (await axios.get<Models.DataLink[]>(resolveUrl("data.json"))).data;
    var bandLink = bandLinks.find(x=>x.id == key)!;
    var band = (await axios.get<Models.Band>(resolveUrl(bandLink.linkToData))).data;
    var albumList = await getMultipleFromLinkList<Models.Album>(band.albums);
    return Promise.resolve(albumList);
}

const getAlbum = async(bandKey: string, albumKey: string) =>{
    var albums = await getBandAlbums(bandKey);
    var album = albums.find(x=>x.id == albumKey);

    return Promise.resolve(album);
}

const getMultipleFromLinkList = async<T>(links:Models.DataLink[]) =>{
    var promises: Promise<void>[] = [];
    var data: T[] = [];

    links.forEach(x => {
        promises.push(axios.get<T>(resolveUrl(x.linkToData)).then((result) => {
            data.push(result.data);
        }));
    });

    await Promise.all(promises);
    return Promise.resolve(data);
}


export { getAllBands, getBand, getMultipleFromLinkList, getBandAlbums, getAlbum};