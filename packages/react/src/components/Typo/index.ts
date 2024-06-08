import { Body } from './Body';
import { Detail } from './Detail';
import { Display } from './Display';
import { Heading } from './Heading';
import { Label } from './Label';
import { Links } from './Links';
import { Title } from './Title';

export type { DisplayProps as DisplayTextProps } from './Display';
export type { HeadingProps as HeadingTextProps } from './Heading';
export type { TitleProps as TitleTextProps } from './Title';
export type { BodyProps as BodyTextProps } from './Body';
export type { DetailProps as DetailTextProps } from './Detail';
export type { LabelProps as LabelTextProps } from './Label';
export type { LinksProps as LinksTextProps } from './Links';

export const Typo = {
  Display,
  Heading,
  Title,
  Body,
  Detail,
  Links,
  Label,
};

export { labelVariants } from './Label';
