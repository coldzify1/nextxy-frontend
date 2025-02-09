import classNames from "classnames"

interface GradientEffectProps {
  className?: string
}

const GradientEffect = (props: GradientEffectProps) => {
  return (
    <div className={classNames("gradient-effect absolute top-0 left-0 w-full h-full z-[-1]",props.className)}/>
  )
}
export default GradientEffect