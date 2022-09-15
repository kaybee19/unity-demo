import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Scene from '../../components/Scene'
import { Wasp } from '../../components/Sprite'
import { SpriteEffect } from '../../components/Sprite/canvas'
import useStore from '../../store'

const CanvasWrapper = styled.div`
    height: 100%;

    .sceneWrapper {
        width: 100%;
        height: 100%;
    }

    &.active {
        height: 60%;
        margin-bottom: 5vh;
        
        .sceneWrapper {
            width: 50%;
        }
    }
`

const CenterSpriteWrapper = styled.div`
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
    top: 50%;
`

export const Editor = () => {
    const { id } = useParams()

    const showInfo = useStore((state: any) => state.showInfo)

    return (
        <div className='overflow-hidden w-screen h-screen flex flex-col'>
            <CenterSpriteWrapper className='absolute'>
                <SpriteEffect canStart={ showInfo } />
            </CenterSpriteWrapper>

            <CanvasWrapper 
                className={`w-full h-full relative flex justify-center items-center`} 
            >
                <div className={`sceneWrapper`}>
                    <Scene modelId={id} />
                </div>
            </CanvasWrapper>

            {/* <Wasp /> */}

        </div>
    )
}

export default Editor