function TitleBar() {
  return (
    <>
      <div className="ui-titlebar">
        <div className="ui-titletext">&#x3042; - LJ Connect</div>
        <div className="ui-titlecontrols">
          <button className="ui-btn minimize" onClick={() => window.windowControls.minimize()}>
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x="0" y="50%" width="10.2" height="1" />
            </svg>
          </button>
          <button className="ui-btn close" onClick={() => window.windowControls.close()}>
            <svg viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
            </svg>
          </button>
        </div>
      </div>
      <br />
    </>
  );
}

export default TitleBar;