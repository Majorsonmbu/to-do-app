import { Card, CardContent, Typography } from "@mui/material";


const TodoItem = ({todo}) => {
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
        </Card>
    )

}

export default TodoItem;