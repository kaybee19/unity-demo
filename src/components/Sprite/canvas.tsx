import { useEffect, useRef, useState } from "react"
import useStore from "../../store"

export const SpriteEffect = ({ canStart }: any) => {
    const spriteImageArray = useStore((state: any) => state.spriteImageArray)

    const canvasRef = useRef() as any

    const frameCount = 68

    let frame = 1
    const speed = 1

    const animate = () => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const index = Math.ceil(frame / speed)
        ctx.drawImage( spriteImageArray.sparkleImgs[index - 1], 0, 0, 2048, 1024, 0, 0, canvas.width, canvas.height )

        if( index >= frameCount )
            return

        frame ++

        requestAnimationFrame(animate)
    }

    useEffect(() => {
        if( canStart )  animate()
    }, [canStart])

    return (
        <div>
            <canvas ref={ canvasRef } width={1024} height={512} />
        </div>
    )
}