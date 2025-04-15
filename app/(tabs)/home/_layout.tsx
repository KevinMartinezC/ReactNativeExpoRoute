import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Home Screen"}} />
    </Stack>
  );
};

export default StackLayout;
