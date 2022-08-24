const Banner = ({text}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        border: "2px dashed pink",
        padding: '5px',
        textAlign: 'center'
      }}>
        {text}
      </div>
    </div>
  );
}

export default Banner;
