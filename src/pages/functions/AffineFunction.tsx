import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"

/* Linear Function 

f(x) = a.x + b

a is a float number and different from 0 and b is 0.

a: float.
a != 0.

b = 0.
*/

type Inputs = {
    valueA: number;
    valueB: number;
    valueX: number;
}

type Result = {
    valueX: number;
    functionValue: number;
}

function AffineFunction() {
    const { register, handleSubmit } = useForm<Inputs>()
    const [result, setResult] = useState<Result | null>(null)

    const calculate: SubmitHandler<Inputs> = (data): void => {
        const { valueA: a, valueB: b, valueX: x } = data;

        /* f(x) = a.x + b */
        const functionValue = a * x + b;
        setResult({ valueX: x, functionValue })
    }

    return (
        <div className="flex flex-row justify-evenly space-x-reverse space-x-12 pt-16">
            <form onSubmit={handleSubmit(calculate)} className="flex flex-col justify-between space-y-4">
                <input {...register("valueA", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de A" className="input input-bordered input-primary w-full max-w-xs" />
                <input {...register("valueB", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de B" className="input input-bordered input-secondary w-full max-w-xs" />
                <input {...register("valueX", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de X" className="input input-bordered input-accent w-full max-w-xs" />
                <button type="submit" className="btn btn-ghost">Calcular</button>
            </form>

            {result == null
                ? null
                : <div className="flex flex-col justify-center max-w-sm">
                    <label htmlFor="resultDelta" className="text-xl">f({result.valueX}) é igual a {result.functionValue}</label>
                </div>
            }
        </div>
    )
}

export default AffineFunction;