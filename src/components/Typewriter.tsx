import Typewriter from 'typewriter-effect'

type TypeWriterPropsType = {
  text: string
}

export const TypeWriter: React.FC<TypeWriterPropsType> = (
  props: TypeWriterPropsType
) => {
  return (
    <Typewriter
      options={{
        strings: [`${props.text}`],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
