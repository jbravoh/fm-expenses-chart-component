type BalanceProps = {
  logo: string;
};

const Balance: React.FC<BalanceProps> = ({ logo }) => {
  return (
    <div className="balance-container">
      <div>
        <p id="balance-label">My balance</p>
        <p id="balance-amount">$921.48</p>
      </div>
      <div>
        <img id="logo" src={logo} alt="log" />
      </div>
    </div>
  );
};

export default Balance;
