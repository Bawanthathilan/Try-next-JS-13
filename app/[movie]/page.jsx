import next from "next"
import Image from "next/image"

export default async function MovieDetail({ params }) {
    const { movie } = params
    const ImgPath = `https://image.tmdb.org/t/p/w500`
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`

    )
    const res = await data.json()

    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime}</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md" >
                    {res.status}
                </h2>

                <Image className="my-12 w-full" src={ImgPath + res.backdrop_path} width={600} height={600} priority />
                <p className="text-lg">{res.overview}</p>
            </div>
        </div>
    )
}