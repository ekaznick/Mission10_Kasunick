function Header(props: any) {
  return (
    <>
      <header className="row navbar navbar-dark bg-dark">
        <div className="col subtitle">
          <h1 className="text-white">{props.title}</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
