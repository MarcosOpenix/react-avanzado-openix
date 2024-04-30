'use client'
import { Image, Slider } from "@nextui-org/react";
import React, { useCallback, useState } from "react";

interface ImageFile {
    id: number,
    name: string;
    url: string;
    brightness: string;
    contrast: string;
    saturation: string;
}
const imagesFake: ImageFile[] = [
    {
        id: 0,
        name: "Girl2",
        url: "https://nextui-docs-v2.vercel.app/images/album-cover.png",
        brightness: "0.5",
        contrast: "0.5",
        saturation: "0.5",
    },
    {
        id: 1,
        name: "Lemon",
        url: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
        brightness: "0.5",
        contrast: "0.5",
        saturation: "0.5",
    },
    {
        id: 2,
        name: "Girl",
        url: "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
        brightness: "0.5",
        contrast: "0.5",
        saturation: "0.5",
    },
    {
        id: 3,
        name: "Girl",
        url: "https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg",
        brightness: "0.5",
        contrast: "0.5",
        saturation: "0.5",
    },
]

export default function ImageGallery() {
    const [images, setImages] = useState(imagesFake)
    console.log(images)
    const handleChange = (id: number, value: number, type: string) => {
        
        let newValues = images.map((imageFile) => {
            if (imageFile.id === id) {
                switch (type) {
                    case "Brillo":
                        return {
                            ...imageFile,
                            brightness: value.toString()
                        }
                    case "Contraste":
                        return {
                            ...imageFile,
                            contrast: value.toString()
                        }

                    case "Saturacion":
                        return {
                            ...imageFile,
                            saturation: value.toString()
                        }
                }
            }
            return imageFile
        })
        console.log(newValues)
        setImages([...newValues]);
    }

    const renderSlider = useCallback((file: ImageFile, type: string) => {
        switch (type) {
            case "Brillo":
                return (
                    <Slider
                        label={type}
                        step={0.01}
                        maxValue={5}
                        minValue={0}
                        value={Number(file.brightness)}
                        onChange={(e) => handleChange(file.id, e as number, type)}
                        color="success"
                    />
                )
            case "Contraste":
                return (
                    <Slider
                        label={type}
                        step={0.01}
                        maxValue={5}
                        minValue={0}
                        value={Number(file.contrast)}
                        onChange={(e) => handleChange(file.id, e as number, type)}
                        color="primary"
                    />
                )
            case "Saturacion":
                return (
                    <Slider
                        label={type}
                        step={0.01}
                        maxValue={5}
                        minValue={0}
                        value={Number(file.saturation)}
                        onChange={(e) => handleChange(file.id, e as number, type)}
                        color="danger"
                    />
                )
            default:
                break;
        }
    }, [])

    return (
        <div className="w-full space-y-5 flex flex-row space-x-5">
            {
                images.map((value) => (
                    <div key={value.id}>
                        <Image
                            isBlurred
                            width={240}
                            height={240}
                            src={value.url}
                            alt={value.name}
                            style={{ filter: `brightness(${value.brightness}) contrast(${value.contrast}) saturate(${value.saturation})` }}
                        />
                        {renderSlider(value, "Brillo")}
                        {renderSlider(value, "Contraste")}
                        {renderSlider(value, "Saturacion")}
                    </div>
                ))
            }
        </div>
    );
}
