import Box from "@mui/material/Box"
import SearchElement from "./SearchElement"

const EmptyQueryResults = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SearchElement />
        </Box>
    )
}

export default EmptyQueryResults
