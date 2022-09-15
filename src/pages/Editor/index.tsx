import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Scene from '../../components/Scene'
import { SpriteEffect } from '../../components/Sprite/canvas'
import useStore from '../../store'

const opacityAnimation = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const circleAnimation = keyframes`
    0% { margin-top: -5px; }
    50% { margin-top: 5px; }
    100% { margin-top: -5px; }
`

const CanvasWrapper = styled.div`
    height: calc(100% - 56px);

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

const LogoWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 15%;
    width: 100%;

    img {
        max-width: 80%;
        max-height: 100%;

        opacity: 0;
        animation: ${ opacityAnimation } 5s;
        animation-delay: 2.2s;
        animation-fill-mode: forwards;
    }

    .description {
        max-width: 80%;

        opacity: 0;
        animation: ${ opacityAnimation } 5s;
        animation-delay: 3.2s;
        animation-fill-mode: forwards;
    }
`

const SrcButton = styled.div`
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 100px;
    transition: all 1s;
    transform: translate3d(-50%, -50%, 0);
    left: 50%;
    top: 50%;
    right: 0%;
    bottom: 0%;
    background: #ffff00;
    cursor: pointer;

    &.active1 {
        width: 60px;
        height: 60px;
        top: 30%;
        left: 12%;
        border: 1px solid #123;
        animation: ${ circleAnimation } 1s infinite;
        animation-timing-function: ease-in;
        animation-delay: .2s;
    }

    &.active2 {
        width: 60px;
        height: 60px;
        top: 64%;
        left: 12%;
        border: 1px solid #123;

        animation: ${ circleAnimation } 1s infinite;
        animation-timing-function: ease-in;
        animation-delay: .5s;
    }

    &.active3 {
        width: 60px;
        height: 60px;
        top: 30%;
        left: 88%;
        border: 1px solid #123;

        animation: ${ circleAnimation } 1s infinite;
        animation-timing-function: ease-in;
        animation-delay: .8s;
    }

    &.active4 {
        width: 60px;
        height: 60px;
        top: 64%;
        left: 88%;
        border: 1px solid #123;

        animation: ${ circleAnimation } 1s infinite;
        animation-timing-function: ease-in;
        animation-delay: .3s;
    }
`

const ActionWrapper = styled.div`
    position: absolute;
    bottom: 0;
    
    p {
        opacity: 0;
        animation: ${ opacityAnimation } 5s;
        animation-delay: 2.2s;
        animation-fill-mode: forwards;
    }
`

const ProductDescWrapper = styled.div`
    position: absolute;
    bottom: 0;
`

const ProductName = styled.div`
    opacity: 0;
    animation: ${ opacityAnimation } 5s;
    animation-delay: 2.2s;
    animation-fill-mode: forwards;
`

const ProductDesc = styled.div`
    opacity: 0;
    animation: ${ opacityAnimation } 5s;
    animation-fill-mode: forwards;

    &.first {
        animation-delay: 3.2s;
    }

    &.second {
        animation-delay: 4.2s;
    }

    &.third {
        animation-delay: 5.2s;
    }
`

export const Editor = () => {
    const { id } = useParams()

    const showInfo = useStore((state: any) => state.showInfo)

    return (
        <div className='overflow-hidden w-screen h-screen flex flex-col'>
            <LogoWrapper className='flex flex-col justify-center items-center'>
                <img src={'assets/BrandLogo_Template.png'} alt='pic'></img>

                <div className='flex justify-between items-center w-full description my-2'>
                    <div className='text-sm'>Zoom and rotate</div>
                    <div className='text-sm'>Doubletap to purchase</div>
                </div>
            </LogoWrapper>

            <CenterSpriteWrapper className='absolute'>
                <SpriteEffect canStart={ showInfo } />
            </CenterSpriteWrapper>

            <CanvasWrapper 
                className={`w-full h-full relative flex justify-center items-center`} 
            >
                <div className={`sceneWrapper`}>
                    <Scene modelId={id} />
                </div>

                <SrcButton className={`flex justify-center items-center ${ showInfo ? 'active1' : '' }`}></SrcButton>

                <SrcButton className={`flex justify-center items-center ${ showInfo ? 'active2' : '' }`}></SrcButton>

                <SrcButton className={`flex justify-center items-center ${ showInfo ? 'active3' : '' }`}></SrcButton>

                <SrcButton className={`flex justify-center items-center ${ showInfo ? 'active4' : '' }`}></SrcButton>

                <ProductDescWrapper className="mb-8 text-center">
                    <ProductName className='text-3xl my-4'>Product Name</ProductName>
                    <ProductDesc className='text-xl my-4 first'>What this product is told here</ProductDesc>
                    <ProductDesc className='text-xl my-4 second'>What this product is told here</ProductDesc>
                    <ProductDesc className='text-xl my-4 third'>What this product is told here</ProductDesc>
                </ProductDescWrapper>
            </CanvasWrapper>

            <ActionWrapper className='w-full flex justify-between items-center px-2'>
                <button className='flex flex-col justify-center items-center font-bold'>
                    <img src='assets/ChatIcon.png' width={32} height={32} alt='pic'></img>
                    2968
                </button>

                <button className='flex flex-col justify-center items-center font-bold'>
                    <img src='assets/Like_HeartIcon.png' width={32} height={32} alt='pic'></img>
                    1.2M
                </button>

                <p className='text-sm text-center'>
                    Share with friends or <br/>
                    Invite them to a private room
                </p>

                <button className='flex flex-col justify-center items-center font-bold'>
                    <img src='assets/ShareIcon.png' width={32} height={32} alt='pic'></img>
                    Share
                </button>
            </ActionWrapper>
        </div>
    )
}

export default Editor