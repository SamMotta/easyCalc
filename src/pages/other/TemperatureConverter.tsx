import { SubmitHandler, useForm } from "react-hook-form"
import { ChangeEvent, useState } from "react"

enum ConversionEnum {
    celsius = "celsius",
    fahrenheit = "fahrenheit",
    kelvin = "kelvin"
}

type Inputs = {
    value: number;
    typeConversion: ConversionEnum
}

type Result = {
    celsius?: number;
    fahrenheit?: number;
    kelvin?: number;
}


function TemperatureConverter() {
    const { handleSubmit, register } = useForm<Inputs>()
    const [result, setResult] = useState<Result>()
    const [option, setOption] = useState<string>()

    function handleOptionChange(ev: ChangeEvent) {
        const convertionType = (ev.currentTarget as HTMLSelectElement).value
        
        setOption(convertionType)
    }



    const calculate: SubmitHandler<Inputs> = (data): void => {
        const { value, typeConversion } = data;

        if (isNaN(value))
            return;

        if (typeConversion === ConversionEnum.celsius) {
            const celsius = value;
            const kelvin = celsius + 273.15;
            const fahrenheit = (celsius * 1.8) + 32;

            setResult({ celsius, kelvin, fahrenheit })

        } else if (typeConversion === ConversionEnum.fahrenheit) {

            const fahrenheit = value;
            const celsius = (fahrenheit - 32) / 1.8;
            const kelvin = (fahrenheit - 32) / 1.8 + 273.15;

            setResult({ celsius, kelvin, fahrenheit })

        } else if (typeConversion === ConversionEnum.kelvin) {
            const kelvin = value;
            const celsius = kelvin - 273.15;
            const fahrenheit = (kelvin - 273.15) * 1.8 + 32;

            setResult({ celsius, kelvin, fahrenheit })

        }
    }

    return (
        <div className="flex flex-row justify-evenly space-x-reverse space-x-12 pt-16">

            {/* Old Form */}
            {/* <form onSubmit={handleSubmit(calculate)} className="flex flex-col justify-between space-y-4">
                <input {...register("celsius", { valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de Celsius" className="input input-bordered input-primary w-full max-w-xs" />
                <input {...register("kelvin", { valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de Kelvin" className="input input-bordered input-secondary w-full max-w-xs" />
                <input {...register("fahrenheit", { valueAsNumber: true })} autoComplete="off" type="number" placeholder="Valor de Fahrenheit" className="input input-bordered input-accent w-full max-w-xs" />
                <button type="submit" className="btn btn-ghost">Calcular</button>
            </form> */}

            <form onSubmit={handleSubmit(calculate)} className="flex flex-col justify-between space-y-4">

                <label htmlFor="SelectConversion" className="label">Seleção de escala</label>
                <select {...register("typeConversion", { onChange: handleOptionChange })} defaultValue="default" onChange={handleOptionChange} className="select select-primary w-full max-w-xs">
                    <option disabled value="default">Selecione a escala</option>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <input {...register("value", { valueAsNumber: true })} autoComplete="off" type="number" placeholder={option === undefined ? "Valor" : "Valor de " + option[0].toUpperCase() + option.slice(1)} className="input input-bordered input-accent w-full max-w-xs" />
                <button type="submit" className="btn btn-ghost">Calcular</button>
            </form>


            {/* Show result */}
            {result == null
                ? null
                : <div className="flex flex-col justify-center max-w-sm">
                    <label htmlFor="resultCelsius" className="text-xl">{`ºC: ${result.celsius?.toFixed(2)}`}</label>
                    <label htmlFor="resultFahrenheit" className="text-xl">{`ºF: ${result.fahrenheit?.toFixed(2)}`}</label>
                    <label htmlFor="resultKelvin" className="text-xl">{`ºK: ${result.kelvin?.toFixed(2)}`}</label>
                </div>
            }
        </div>
    )
}

export default TemperatureConverter;