import { useEffect, useRef, useState } from "react"

export const SpriteEffect = ({ canStart }: any) => {
    const canvasRef = useRef() as any

    const frameCount = 68

    let first = true
    let frame = 1
    const speed = 1
    let imageArray = [] as any

    const [ imgArray, setImgArray ] = useState([]) as any

    const animate = () => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const index = Math.ceil(frame / speed)
        ctx.drawImage( imgArray[index - 1], 0, 0, 2048, 1024, 0, 0, canvas.width, canvas.height )

        if( index >= frameCount )
            return

        frame ++

        requestAnimationFrame(animate)
    }

    useEffect(() => {
        if( first ) {
            first = false
            return
        }

        const promises = []

        for( let i = 1; i <= frameCount; i++ ) {
            promises.push(new Promise((resolve, reject) => {
                const img = new Image() as any
                img.src = `assets/sparkle_sprite/${ i }.png`
                img.onload = () => {
                    imageArray[i - 1] = img

                    resolve(true)
                }
            }))
        }

        Promise.all(promises).then((res) => {
            setImgArray(imageArray)
        })
    }, [])

    useEffect(() => {
        if( canStart )  animate()
    }, [canStart])

    return (
        <div>
            <canvas ref={ canvasRef } width={1024} height={512} />
        </div>
    )
}