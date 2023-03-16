import { useRouter } from 'next/router'

const Doc = () => {
    const router = useRouter()
    const {params=[]} = router.query

    return (
        <>
        {
            
            params.length === 2 ? (
                <h1>Viewing docs for feature {params[0]} and concept {params[1]}</h1>
            ) : params.length === 1 ? (
                <h1>Viewing docs for feature {params[0]}</h1>
            ) : (
                <h1>Docs Home Page</h1>
            )
        }
        </>
    )
}

export default Doc