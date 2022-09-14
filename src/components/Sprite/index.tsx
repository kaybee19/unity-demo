import { useSprite } from 'react-sprite-animator'

export const Wasp = () => {
  const styles = useSprite({
    sprite: '/assets/waspanim_sprite.png',
    width: 70,
    height: 70,
    stopLastFrame: true,
  })

  return <div style={styles} />
}