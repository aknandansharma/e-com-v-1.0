import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.",
    },
];

export default function ResponsiveImageList() {
    const isMobile = useMediaQuery("(max-width:600px)");

    // Helper function to truncate text
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <ImageList
            sx={{
                width: "100%",
                height: "auto",
                marginTop: isMobile ? "17%" : "6%",
                marginBottom: isMobile ? "30%" : "7%",
            }}
            cols={isMobile ? 1 : 3}
            gap={16}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <Card
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading='lazy'
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                            }}
                        />
                        <CardContent>
                            <Typography variant='body2' color='text.secondary'>
                                {truncateText(item.title, 50)}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "space-around" }}>
                            <Button
                                size='small'
                                color='primary'
                                variant='contained'
                                onClick={() =>
                                    alert(`Open clicked for ${item.title}`)
                                }>
                                Enquire
                            </Button>
                            <Button
                                size='small'
                                color='secondary'
                                variant='contained'
                                onClick={() =>
                                    alert(`Share clicked for ${item.title}`)
                                }>
                                Open
                            </Button>
                            <Button
                                size='small'
                                color='success'
                                variant='contained'
                                onClick={() =>
                                    alert(`Enquire clicked for ${item.title}`)
                                }>
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </ImageListItem>
            ))}
        </ImageList>
    );
}
