export const composeWrappers =
  (...wrappers) =>
  ({ children }) => {
    return (
      <>
        {wrappers.reverse().reduce(
          (acc, [Wrapper, props]) => (
            <Wrapper {...props}>{acc}</Wrapper>
          ),
          children
        )}
      </>
    );
  };
