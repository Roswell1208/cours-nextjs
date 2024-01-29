import AlbumsList from "@/components/AlbumsList";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Liste des albums',
  description: 'Liste des albums',
}

const getData = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10');
    const data = await albums.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
}

const AlbumsPage = async () => {
    const albums = await getData();

    return (
        <div>
            <AlbumsList albums={albums} />
        </div>
    )
}

export default AlbumsPage;