export type { DisplayProps as DisplayTextProps } from "./Display"
export type { HeadingProps as HeadingTextProps } from "./Heading"
export type { TitleProps as TitleTextProps } from "./Title"
export type { BodyProps as BodyTextProps } from "./Body"
export type { DetailProps as DetailTextProps } from "./Detail"

import { Display } from "./Display"
import { Heading } from "./Heading"
import { Title } from "./Title"
import { Body } from "./Body"
import { Detail } from "./Detail"

export const Text = {
  Display,
  Heading,
  Title,
  Body,
  Detail
}

export { labelVariants } from "./Label"