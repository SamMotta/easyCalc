import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

type Inputs = {
    tempValue: number;
}

type Result = {
    celsius?: number;
    fahrenheit?: number;
    kelvin?: number;
};

function TemperatureConverter() {
    const { handleSubmit, register } = useForm<Inputs>()
    const [result, setResult] = useState<Result>()

    const calculate: SubmitHandler<Inputs> = (data): void => {
        const { tempValue: temp } = data
    
        // Do the calculations
    
    }

    return (
        <div>
            Temperatura
        </div>
    )
}

export default TemperatureConverter;