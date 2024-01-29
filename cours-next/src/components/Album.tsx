import Image from 'next/image'

export default function Album({ album, photos }: { album: {id: number, title: string}, photos: [] }) {
    return (
        <div style={{ margin: '50px' }}>
            <h1>{album.title}</h1>
            
            <h2>Photos</h2>
            <ul>
                {photos.map((photo: {id: number, title: string, url: string, thumbnailUrl: string}) => (
                    <li key={photo.id}>
                        <h3>{photo.title}</h3>
                        <h4>{photo.url}</h4>
                        <Image 
                            src={photo.thumbnailUrl} 
                            alt={photo.title} 
                            width={100} 
                            height={100} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}