import { useSearchParams } from "react-router-dom"
import "./App.css"
import EmptyQueryResults from "./components/EmptyQueryResults"
import ResultElemet from "./components/ResultElement"

function App() {
    const [searchParams] = useSearchParams()

    return (
        <>
            {searchParams.get("query") || searchParams.get("metaphor") ? (
                <ResultElemet />
            ) : (
                <EmptyQueryResults />
            )}
        </>
    )
}

export default App
