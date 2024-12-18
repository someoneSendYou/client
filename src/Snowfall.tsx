import './style/snowEffect.css'

const Snowfall = () => {
  const snowflakeCount = 50;

  return (
    <div className='snowfall-container'>
      {Array.from({ length: snowflakeCount }).map((_, index) => (
        <div key={index} className='snowflake'></div>
      ))}
    </div>
  );
};

export default Snowfall;
