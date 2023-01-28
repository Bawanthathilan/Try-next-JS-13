import Link from "next/link"
import Image from "next/image"
export default function Movie({ title, id, poster_path, release_data }) {

    const ImgPath = `https://image.tmdb.org/t/p/w500`

    return (
        <div>
            <h1 >{title}</h1>
            <p>{release_data}</p>

            <Link href={`/${id}`}>
                <Image src={ImgPath + poster_path} alt={title} width={800} height={800} />
            </Link>
        </div >
    )
}