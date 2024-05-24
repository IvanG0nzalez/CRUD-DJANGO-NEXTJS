"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "@/hooks/Connection";
import { messages } from "@/components/Messages";

export default function ModifyMovie() {
    const router = useRouter();
    const { external_id } = useParams();
    const [movie, setMovie] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedDirectors, setSelectedDirectors] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        release_date: Yup.date().required("Release date is required"),
        duration: Yup.number().required("Duration is required").positive("Duration must be a positive number"),
        rating: Yup.number()
            .transform((value, originalValue) => (originalValue === "" ? null : value))
            .positive("Rating must be a positive number")
            .max(100, "Rating can't be more than 100")
            .nullable(),
        directors: Yup.array().min(1, "At least one director is required").required("Directors are required"),
        genres: Yup.array().min(1, "At least one genre is required").required("Genres are required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState, setValue, reset } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {
        const fetchData = async () => {
            const response_directors = await get("directors/");
            setDirectors(response_directors);

            const response_genres = await get("genres/");
            setGenres(response_genres);

            const response_movie = await get(`movies/${external_id}`);
            setMovie(response_movie);

            const directorIds = response_movie.director_list.map(director => director.external_id);
            const genreIds = response_movie.genre_list.map(genre => genre.external_id);

            setSelectedDirectors(directorIds);
            setSelectedGenres(genreIds);

            reset({
                title: response_movie.title,
                release_date: response_movie.release_date,
                duration: response_movie.duration,
                rating: response_movie.rating || "",
                directors: directorIds,
                genres: genreIds,
            });
        };

        fetchData();
    }, [external_id, reset]);

    const sendData = async (formData) => {

        const releaseDateISO = formData.release_date.toISOString();
        const releaseDateYYYYMMDD = releaseDateISO.split('T')[0];

        const data = {
            title: formData.title,
            release_date: releaseDateYYYYMMDD,
            duration: formData.duration,
            rating: formData.rating || null,
            directors: selectedDirectors,
            genres: selectedGenres,
        };
        await update(`movies/${external_id}/`, data);
        messages("OK", "Movie Updated", "success");
        router.back();
    };

    const handleDirectorChange = (external_id) => {
        setSelectedDirectors((prev) => {
            const updatedDirectors = prev.includes(external_id)
                ? prev.filter(id => id !== external_id)
                : [...prev, external_id];
            setValue("directors", updatedDirectors);
            return updatedDirectors;
        });
    };

    const handleGenreChange = (external_id) => {
        setSelectedGenres((prev) => {
            const updatedGenres = prev.includes(external_id)
                ? prev.filter(id => id !== external_id)
                : [...prev, external_id];
            setValue("genres", updatedGenres);
            return updatedGenres;
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body p-5 text-center">
                            <h2 className="mb-4">Modify Movie</h2>
                            <form onSubmit={handleSubmit(sendData)}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                                    <input
                                        {...register("title")}
                                        id="title"
                                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                        placeholder="Enter the movie title"
                                    />
                                    <div className="invalid-feedback">{errors.title?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="release_date" className="form-label"><strong>Release Date</strong></label>
                                    <input
                                        type="date"
                                        {...register("release_date")}
                                        id="release_date"
                                        className={`form-control ${errors.release_date ? "is-invalid" : ""}`}
                                    />
                                    <div className="invalid-feedback">{errors.release_date?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="duration" className="form-label"><strong>Duration (in minutes)</strong></label>
                                    <input
                                        type="number"
                                        {...register("duration")}
                                        id="duration"
                                        className={`form-control ${errors.duration ? "is-invalid" : ""}`}
                                        placeholder="Enter the duration"
                                    />
                                    <div className="invalid-feedback">{errors.duration?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="rating" className="form-label"><strong>Rating</strong></label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        {...register("rating")}
                                        id="rating"
                                        className={`form-control ${errors.rating ? "is-invalid" : ""}`}
                                        placeholder="Enter the rating (optional)"
                                    />
                                    <div className="invalid-feedback">{errors.rating?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label"><strong>Directors</strong></label>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {directors.map(director => (
                                                <tr key={director.external_id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            value={director.external_id}
                                                            onChange={() => handleDirectorChange(director.external_id)}
                                                            checked={selectedDirectors.includes(director.external_id)}
                                                        />
                                                    </td>
                                                    <td>{director.names} {director.last_names}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {errors.directors && <div className="text-danger">{errors.directors.message}</div>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="genres" className="form-label"><strong>Genres</strong></label>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {genres.map(genre => (
                                                <tr key={genre.external_id}>
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            value={genre.external_id}
                                                            onChange={() => handleGenreChange(genre.external_id)}
                                                            checked={selectedGenres.includes(genre.external_id)}
                                                        />
                                                    </td>
                                                    <td>{genre.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {errors.genres && <div className="text-danger">{errors.genres.message}</div>}
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-success">
                                        Save
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={() => router.back()}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .container {
                padding: 2rem;
            }
            .card {
                margin-top: 2rem;
            }
        `}</style>
        </div>
    );
}