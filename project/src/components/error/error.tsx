function Error(): JSX.Element {

  const style = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
    },
  } as const;

  return (
    <main>
      <div style={style.container}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </main>
  );
}

export default Error;
