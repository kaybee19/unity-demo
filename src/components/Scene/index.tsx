import { Canvas, extend, useThree } from '@react-three/fiber'
import { ambientLightProps, backgroundColor, cameraProps, modelScaleValue, orbitControlProps, spotLightProps, spotLightProps2 } from '../../constants/scene'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Model from './model'
import { Loader } from './Loader'
import { pendantsModelProps } from '../../constants'

export const Scene = ({ modelId }: any) => {
    const scaleValue = modelScaleValue

    const getModelInfo = (id: any) => {
        const result = pendantsModelProps.find((item: any) => (
            Number(item.id) === Number(id)
        ))

        return result
    }

    const modelInfo = getModelInfo( modelId ) as any

    return (
        <Canvas
            gl={{ antialias: true, alpha: true,}}
            camera={{ fov: cameraProps.fov, position: [ cameraProps.position.x, cameraProps.position.y, cameraProps.position.z ] }}
            shadows
        >
            {/* <color attach="background" args={[ backgroundColor ]} /> */}

            <ambientLight 
                color={ ambientLightProps.color }
            />

            <spotLight
                color={ spotLightProps.color }
                castShadow={ spotLightProps.castShadow }
                position={[ -spotLightProps.position.x, spotLightProps.position.y, spotLightProps.position.z ]}
                intensity={ spotLightProps.intensity }
            />

            <spotLight
                color={ spotLightProps.color }
                castShadow={ spotLightProps.castShadow }
                position={[ -spotLightProps.position.x, spotLightProps.position.y, -spotLightProps.position.z ]}
                intensity={ spotLightProps.intensity }
            />

            <spotLight
                color={ spotLightProps2.color }
                castShadow={ spotLightProps2.castShadow }
                position={[ -spotLightProps2.position.x, spotLightProps2.position.y, spotLightProps2.position.z ]}
                intensity={ spotLightProps2.intensity }
            />

            <spotLight
                color={ spotLightProps2.color }
                castShadow={ spotLightProps2.castShadow }
                position={[ -spotLightProps2.position.x, spotLightProps2.position.y, -spotLightProps2.position.z ]}
                intensity={ spotLightProps2.intensity }
            />

            <OrbitControls
                maxZoom={10}
                minZoom={1}
                maxDistance={orbitControlProps.maxDistance}
                minDistance={orbitControlProps.minDistance}
                target={[ orbitControlProps.target[0], orbitControlProps.target[1], orbitControlProps.target[2] ]}
                enablePan={false}
                // autoRotate={true}
            />

            <Suspense fallback={<Loader />}>
                <Model 
                    scale={[scaleValue, scaleValue, scaleValue]}
                    modelInfo={ modelInfo }
                />
            </Suspense>
        </Canvas>
    )
}

export default Scene