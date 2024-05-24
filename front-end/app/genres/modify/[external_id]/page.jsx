"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { get, update } from "@/hooks/Connection";
import { messages } from "@/components/Messages";

export default function ModifyGenre() {
    const router = useRouter();
    const { external_id } = useParams();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState, reset } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {
        const fetchData = async () => {
            const response_genre = await get(`genres/${external_id}`);

            reset({
                name: response_genre.name,
            });
        };

        fetchData();
    }, [external_id, reset]);

    const sendData = async (formData) => {
        const data = {
            name: formData.name,
        };

        await update(`genres/${external_id}/`, data);
        messages("OK", "Genre updated", "success");
        router.back();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body p-5 text-center">
                            <h2 className="mb-4">Modify Genre</h2>
                            <form onSubmit={handleSubmit(sendData)}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                                    <input
                                        {...register("name")}
                                        id="name"
                                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                        placeholder="Enter the director's name"
                                    />
                                    <div className="invalid-feedback">{errors.name?.message}</div>
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