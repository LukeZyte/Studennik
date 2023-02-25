import AppPreparation from "./AppPreparation";
import AuthCtxProvider from "./store/authCtx";

export default function App() {
  return (
    <AuthCtxProvider>
      <AppPreparation />
    </AuthCtxProvider>
  );
}
