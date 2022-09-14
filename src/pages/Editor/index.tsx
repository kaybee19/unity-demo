import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Scene from '../../components/Scene'
import { Wasp } from '../../components/Sprite'

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

export const Editor = () => {
    const { id } = useParams()

    return (
        <div className='overflow-hidden w-screen h-screen flex flex-col'>
            <CanvasWrapper 
                className={`w-full h-full relative flex justify-center items-center`} 
            >
                <div className={`sceneWrapper`}>
                    <Scene modelId={id} />
                </div>
            </CanvasWrapper>

            <Wasp />
        </div>
    )
}

export default Editor