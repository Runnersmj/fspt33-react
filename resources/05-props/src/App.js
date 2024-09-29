import { Banner } from "./components/Banner";

export const App = () => {
  return (
    <div>
      <Banner title="Hello from Vue" subTitle="This is not a Vue component" />
      <Banner
        title="Hello from jQuery"
        subTitle="This is not a jQuery component"
      />
      <Banner title="Hello from React" subTitle="This is a React component" />
    </div>
  );
};
