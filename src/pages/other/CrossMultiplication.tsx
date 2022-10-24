import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    valueA: number;
    valueB: number;
    valueC: number;
}

type Result = number;

function CrossMultiplication() {
    const { register, handleSubmit } = useForm<Inputs>()
    const [result, setResult] = useState<Result>()

    const calculate: SubmitHandler<Inputs> = data => {
        const { valueA: a, valueB: b, valueC: c } = data
        let x: number;

        x = (a * b) / c
        setResult(x)
    }

    return (
        <div className="flex flex-col space-y-6 items-center pt-8">
            <form onSubmit={handleSubmit(calculate)} className="flex flex-col justify-between space-y-4">
                <label></label>
                <div className="flex flex-row gap-x-3">
                    <input autoComplete="off" value={result} type="number" placeholder="X" disabled className="input input-bordered input-primary input-disabled input-lg w-40 placeholder:text-center" />
                    <input {...register("valueA", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="A" className="input input-bordered input-primary input-lg w-40 placeholder:text-center" />
                </div>
                <div className="flex flex-row gap-x-3">
                    <input {...register("valueB", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="B" className="input input-bordered input-primary input-lg w-40 placeholder:text-center" />
                    <input {...register("valueC", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="C" className="input input-bordered input-primary input-lg w-40 placeholder:text-center" />
                </div>
                <button type="submit" className="btn btn-ghost">Calcular</button>
            </form>
        </div>
    )
}

export default CrossMultiplication