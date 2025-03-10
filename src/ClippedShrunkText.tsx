import { ComponentType, PropsWithChildren, useMemo } from 'react';
import { TextLayoutLine, TextProps, TextStyle } from 'react-native';

type ClippedShrunkTextProps = PropsWithChildren<{
  linesToRender: TextLayoutLine[];
  numberOfLines: number;
  textComponent: ComponentType<TextProps>;
  textStyle?: TextStyle;
}>;

const ClippedShrunkText = ({
  children,
  linesToRender,
  numberOfLines,
  textComponent: TextComponent,
  textStyle,
}: ClippedShrunkTextProps) => {
  const numberOfLinesToClip = useMemo(
    () => Math.min(numberOfLines, linesToRender.length) - 1,
    [linesToRender.length, numberOfLines]
  );

  if (linesToRender.length < 2) return null;

  return (
    <TextComponent style={textStyle} numberOfLines={numberOfLinesToClip} ellipsizeMode="clip">
      {children}
    </TextComponent>
  );
};

export default ClippedShrunkText;
