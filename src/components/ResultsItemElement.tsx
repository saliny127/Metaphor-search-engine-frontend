import { useState } from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

export default function ResultsItemElement({ result: { _source: result } }: any) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h5" component="div" color="#0000CD">
                    {result.song_name}
                </Typography>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="#4169E1"
                    gutterBottom
                >
                    Yr: {result.year}
                </Typography>
                
                <Typography sx={{ fontSize: 14 }}
                    color="#4169E1"
                    gutterBottom>
                    Album: {result.album}
                </Typography>
                <Typography variant="body1">
                    Lyricist - {result.lyricist}
                </Typography>
                <Typography variant="body1">
                    Singers - {result.singers}
                </Typography>
                <Typography variant="body1">
                    Composer - {result.composer}
                </Typography>
                
                {result.metaphors.map((metaphors:any) => {
								console.log(metaphors);
								return (
									<Card>
										<CardContent>
                                            <Typography variant="body2">metaphor       : {metaphors.metaphor}</Typography>
                                            <Typography variant="body2">source         : {metaphors.source}</Typography>
                                            <Typography variant="body2">target         : {metaphors.target}</Typography>
                                            <Typography variant="body2">interpretation : {metaphors.interpretation}</Typography>
										</CardContent>
									</Card>
								);
							})}
            </CardContent>
        </Card>
    )
}
