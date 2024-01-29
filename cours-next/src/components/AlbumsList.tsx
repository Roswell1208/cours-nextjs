export default function AlbumsList({ albums }: { albums: [] }) {
    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums.map((album: {id: number, title: string}) => (
                    <li key={album.id} style={{ margin: '50px' }}>
                        <a href={`/albums/${album.id}`}><h3>{album.title}</h3></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}