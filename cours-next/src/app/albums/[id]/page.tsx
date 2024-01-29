import Album from "@/components/Album";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Liste des photos pour un album',
  description: 'Liste des photos pour un album',
}

const getData = async (id: number) => {
    const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const albumPhotos = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    const data = await album.json();
    const photos = await albumPhotos.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    return { album: data, photos };
}

const AlbumPage = async ({ params }: {params: {id: number}}) => {
    const { album, photos } = await getData(params.id);

    return (
        <div>
            <Album album={album} photos={photos} />
        </div>
    )
}

export default AlbumPage;