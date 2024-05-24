"use client";

import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { send } from "@/hooks/Connection";
import { messages } from "@/components/Messages";

export default function AddDirector() {
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        names: Yup.string().required("Name is required"),
        last_names: Yup.string().required("Name is required"),
        date_of_birth: Yup.date().required("Date of birth is required"),
        nationality: Yup.string().required("Nationality is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const sendData = async (formData) => {

        const releaseDateISO = formData.date_of_birth.toISOString();
        const releaseDateYYYYMMDD = releaseDateISO.split('T')[0];

        const data = {
            names: formData.names,
            last_names: formData.last_names,
            date_of_birth: releaseDateYYYYMMDD,
            nationality: formData.nationality
        };

        await send("directors/", data);
        messages("OK", "New director added", "success");
        router.back();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body p-5 text-center">
                            <h2 className="mb-4">Add New Director</h2>
                            <form onSubmit={handleSubmit(sendData)}>
                                <div className="mb-4">
                                    <label htmlFor="names" className="form-label"><strong>Names</strong></label>
                                    <input
                                        {...register("names")}
                                        id="names"
                                        className={`form-control ${errors.names ? "is-invalid" : ""}`}
                                        placeholder="Enter the director's names"
                                    />
                                    <div className="invalid-feedback">{errors.names?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="last_names" className="form-label"><strong>Last Names</strong></label>
                                    <input
                                        {...register("last_names")}
                                        id="last_names"
                                        className={`form-control ${errors.last_names ? "is-invalid" : ""}`}
                                        placeholder="Enter the director's last names"
                                    />
                                    <div className="invalid-feedback">{errors.last_names?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="date_of_birth" className="form-label"><strong>Date of Birth</strong></label>
                                    <input
                                        type="date"
                                        {...register("date_of_birth")}
                                        id="date_of_birth"
                                        className={`form-control ${errors.date_of_birth ? "is-invalid" : ""}`}
                                    />
                                    <div className="invalid-feedback">{errors.date_of_birth?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="nationality" className="form-label"><strong>Nationality</strong></label>
                                    <input
                                        {...register("nationality")}
                                        id="nationality"
                                        className={`form-control ${errors.nationality ? "is-invalid" : ""}`}
                                        placeholder="Enter the director's nationality"
                                    />
                                    <div className="invalid-feedback">{errors.nationality?.message}</div>
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