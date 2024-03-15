import { YStack, H2, Separator, Theme } from 'tamagui'

const Page = () => {
  return (
    <Theme name="dark">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Home</H2>
        <Separator />
      </YStack>
    </Theme>
  )
}

export default Page
