import React from "react"
import Movie from "../components/Movie"
import { dummy } from "../movieDummy"

export default function Movies() {
	return (
		<div className="movies-container" style={{ fontSize: "32px" }}>
			{dummy.results.map((item) => {
				return (
					<Movie
						title={item.title}
						poster_path={item.poster_path}
						vote_average={item.vote_average}
						overview={item.overview}
						release_date={item.release_date}
					/>
				)
			})}
		</div>
	)
}
