import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";


const TodoItem = ({todo, fetchCurrentTodoDetails}) => {
    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column"
        }}>
            <CardContent>
                <Typography variant="h5" color={"text.secondary"}>{todo?.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button 
                    onClick={() => fetchCurrentTodoDetails(todo?.id)}
                    sx= {{
                        backgroundColor: "#000000",
                        color: "#fff",
                        opacity: "0.75",
                        "&:hover" : {
                            opacity: "1",
                            backgroundColor: "#000000",
                            color: "#fff",
                        }
                }}>
                    Show Details
                </Button>
            </CardActions>
        </Card>
    )

}

export default TodoItem;