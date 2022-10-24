import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    valueA: number;
    valueB: number;
    valueC: number;
}

type Result = {
    delta: number;
    x1?: number;
    x2?: number;
    graphic: string;
    info: Array<String>;
}

function QuadraticFunction() {
    const { register, handleSubmit } = useForm<Inputs>()
    const [result, setResults] = useState<Result>()

    // Calculation almost complete. More tests needed!
    const calculate: SubmitHandler<Inputs> = (data): void => {
        /* Formula 
        delta = b² - 4ac
        
        x = -b +- sqrt(delta) 
        ---------------------
                2a
        */
        const { valueA: a, valueB: b, valueC: c } = data;
        
        const info: Array<String> = []
        let graphic = "Unknown";

        if (a === 0 || b === 0 || c === 0) {
            return alert("Os valores devem ser diferentes de 0!");
        }

        //  Graphic validation
        if (a > 0)
            graphic = "Concavidade da parábola voltada para cima"
        else if (a < 0)
            graphic = "Concavidade da parábola voltada para baixo"
        else
            graphic = "";

        let delta = Math.pow(b, 2) - (4 * a * c);

        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);

            info.push("O gráfico “corta” o eixo x em dois pontos, ou seja, temos x' e x''.");

            setResults({ delta, x1, x2, graphic, info });
        } else if (delta < 0) {
            //  If delta is negative, it doesn't have real roots.
            info.push("O gráfico não “corta” o eixo x, pois não existem raízes.");
            info.push("A equação de 2º grau não possui raízes reais!");

            setResults({ delta, graphic, info });
        } else {
            // delta it's equal to 0
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);

            info.push("O gráfico “corta” o eixo x em um ponto, ou seja, x' = x''.")

            setResults({ delta, x1, x2, graphic, info });
        }
    }

    return (
        <div className="flex flex-col space-y-6 items-center pt-8">
            <form onSubmit={handleSubmit(calculate)} className="flex flex-col justify-between space-y-4">
                <input {...register("valueA", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de A" className="input input-bordered input-primary w-full max-w-xs" />
                <input {...register("valueB", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de B" className="input input-bordered input-secondary w-full max-w-xs" />
                <input {...register("valueC", { required: true, valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de C" className="input input-bordered input-accent w-full max-w-xs" />
                <button type="submit" className="btn btn-ghost">Calcular</button>
            </form>

            {/* Show the formula and put an example of how to calculate */}
            {result == null
                ? null
                : <div className="flex flex-col justify-between space-x-4 overflow-x-hidden">
                    <label></label>
                    <label htmlFor="resultDelta" className="text-lg w-full max-w-xs" key="delta">Δ.: {result?.delta?.toFixed(2)}</label>
                    <label htmlFor="resultX1" className="text-lg w-full max-w-xs" key="firstRoot">X'.: {result?.x1?.toFixed(2)}</label>
                    <label htmlFor="resultX2" className="text-lg w-full max-w-xs" key="secondRoot">X''.: {result?.x2?.toFixed(2)}</label>
                    <label htmlFor="graphic" className="text-lg w-full max-w-xs" key="graphic">Gráfico.: {result?.graphic}</label>
                    {result.info.map(infoValue => {
                        return (
                            <label htmlFor="otherInfo" className="text-lg w-full max-w-xs sm:max-w-none mb-5" key="info">{infoValue}</label>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default QuadraticFunction;