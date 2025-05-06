import { toast } from "sonner"

const { useState } = require("react")

const useFetch = (cb)=>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const fn = async(...args)=>{
        setLoading(true)
        setError(false)

        try{
            const result = await cb(...args)
            setData(result)
            setError(null)
        }catch(err){
            setError(err)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }


    return {data, error, loading, fn, setData}
}


export default useFetch